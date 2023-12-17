// Services
import { supabase} from "./index";

export const getAllPets = async () => {
  const { data, error } = await supabase
    .from("pets")
    .select("*, users(firstName, lastName)");

  if (error) throw new Error("Pets could not be loaded");

  return data;
};

export const getLostPets = async () => {
  const { data, error, count } = await supabase
    .from("pets")
    .select("*", { count: "exact" })
    .eq("status", "Lost");

  if (error) throw new Error("Lost Pets could not be loaded");

  return { data, count };
};

export const getFoundPets = async () => {
  const { data, error, count } = await supabase
    .from("pets")
    .select("*", { count: "exact" })
    .eq("status", "Found");

  if (error) throw new Error("Found Pets could not be loaded");

  return { data, count };
};

export const getReunitedPets = async () => {
  const { data, error, count } = await supabase
    .from("pets")
    .select("*", { count: "exact" })
    .eq("status", "Reunited");

  if (error) throw new Error("Reunited Pets could not be loaded");

  return { data, count };
};
