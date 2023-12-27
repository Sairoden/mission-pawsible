// Services
import { supabase } from "./index";

export const getAllPets = async () => {
  const { data, error } = await supabase
    .from("pets")
    .select("*, users(firstName, lastName)");

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
    .eq("status", "Lost");

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
    .eq("status", "Found");

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
    .eq("status", "Reunited");

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
