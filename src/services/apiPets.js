// Services
import { supabase, supabaseUrl, getCoordsForAddress } from "./index";

export const getAllPets = async () => {
  const { data, error } = await supabase
    .from("pets")
    .select("*, users(firstName, lastName)")
    .eq("isVerified", true);

  if (error) {
    console.error(error.message);
    throw new Error("Pets could not be loaded");
  }

  return data;
};

export const getLostPets = async () => {
  const { data, error, count } = await supabase
    .from("pets")
    .select("*", { count: "exact" })
    .eq("status", "Lost")
    .eq("isVerified", true);

  if (error) {
    console.error(error.message);
    throw new Error("Lost Pets could not be loaded");
  }

  return { data, count };
};

export const getFoundPets = async () => {
  const { data, error, count } = await supabase
    .from("pets")
    .select("*", { count: "exact" })
    .eq("status", "Found")
    .eq("isVerified", true);

  if (error) {
    console.error(error.message);
    throw new Error("Found Pets could not be loaded");
  }

  return { data, count };
};

export const getReunitedPets = async () => {
  const { data, error, count } = await supabase
    .from("pets")
    .select("*", { count: "exact" })
    .eq("status", "Reunited")
    .eq("isVerified", true);

  if (error) {
    console.error(error.message);
    throw new Error("Reunited Pets could not be loaded");
  }

  return { data, count };
};

export const getSinglePet = async id => {
  const { data, error } = await supabase.from("pets").select("*").eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Pet could not be loaded");
  }

  return data[0];
};

export const getUserPets = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .eq("userId", user.id);

  if (error) {
    console.error(error.message);
    throw new Error("User pets could not be loaded");
  }

  return data;
};

export const createPet = async newPet => {
  const newImages = [];
  for (let image of newPet.images) {
    let imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    let imagePath = `${supabaseUrl}/storage/v1/object/public/pet-images/${encodeURI(
      imageName
    )}`;

    // 1. Upload image
    const { error: storageError } = await supabase.storage
      .from("pet-images")
      .upload(imageName, image);

    if (storageError)
      throw new Error(
        "Pet image could not be uploaded and the pet was not created"
      );

    newImages.push(imagePath);
  }

  // 2. Get latitude and longitude
  const coordinates = await getCoordsForAddress(newPet.location);

  newPet.location = coordinates.formattedAddress;

  // 3. Get User ID
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error("User could not be loaded");

  const { data, error } = await supabase
    .from("pets")
    .insert([
      {
        ...newPet,
        images: newImages,
        lat: coordinates.lat,
        lng: coordinates.lng,
        userId: userData.user.id,
      },
    ])
    .select();

  if (error) throw new Error("Pet could not be registered");

  return data;
};

export const updatePet = async (newPet, petId) => {
  // 1. Get Pet
  let { data: pet, petError } = await supabase
    .from("pets")
    .select("*")
    .eq("id", petId);

  if (petError) throw new Error("Pet ID not found. Please try again");

  let newImages = [];
  if (newPet.images.length > 0) {
    for (let image of newPet.images) {
      let imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
      let imagePath = `${supabaseUrl}/storage/v1/object/public/pet-images/${encodeURI(
        imageName
      )}`;

      // 1. Upload image
      const { error: storageError } = await supabase.storage
        .from("pet-images")
        .upload(imageName, image);

      if (storageError)
        throw new Error(
          "Pet image could not be uploaded and the pet was not created"
        );

      newImages.push(imagePath);
    }
  }

  // 2. Get latitude and longitude
  const coordinates = await getCoordsForAddress(newPet.location);

  newPet.location = coordinates.formattedAddress;

  newImages =
    newPet.images.length > 0 ? [...pet[0].images, ...newImages] : pet[0].images;

  console.log(newImages);

  // 3. Update Pet
  let query = supabase
    .from("pets")
    .update({
      ...newPet,
      images: newImages,
      lat: coordinates.lat,
      lng: coordinates.lng,
    })
    .eq("id", petId);

  const { data, error } = await query.select().single();

  if (error) throw new Error("Pet could not be edited");

  return data;
};

export const getUserPet = async id => {
  const { data, error } = await supabase.from("pets").select("*").eq("id", id);

  if (error) throw new Error("Pet could not be loaded");

  const { data: user } = await supabase.auth.getUser();

  if (data[0].userId !== user.user.id) throw new Error("Pet not found");

  return data[0];
};

export const updatePetStatus = async id => {
  const { data, error } = await supabase
    .from("pets")
    .update({ status: "Reunited" })
    .eq("id", id)
    .select();

  if (error) throw new Error("Pet status could not be updated");

  return data;
};

export const deletePet = async id => {
  const { error } = await supabase.from("pets").delete().eq("id", id);

  if (error) throw new Error("Pet could not be deleted");
};
