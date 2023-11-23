// Services
import { supabase, supabaseUrl } from "./index";

export const getAllPets = async () => {
  const { data, error } = await supabase
    .from("pets")
    .select("*, users(firstName, lastName)");

  if (error) throw new Error("Pets could not be loaded");

  return data;
};
