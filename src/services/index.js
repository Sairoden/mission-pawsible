// SUPABASE
import { supabaseUrl, supabase } from "./supabase";

// PETS
import { getAllPets } from "./apiPets";

// AUTH
import { login, getCurrentUser, logout } from "./apiAuth";

export {
  // SUPABASE
  supabaseUrl,
  supabase,

  // PETS
  getAllPets,

  // AUTH
  login,
  getCurrentUser,
  logout,
};
