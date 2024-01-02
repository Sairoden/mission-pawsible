// SUPABASE
import { supabaseUrl, supabase } from "./supabase";

// PETS
import {
  getAllPets,
  getLostPets,
  getFoundPets,
  getReunitedPets,
  getSinglePet,
  getUserPets,
} from "./apiPets";

// AUTH
import {
  loginWithGoogle,
  login,
  getCurrentUser,
  logout,
  signup,
  resendEmailConfirmation,
} from "./apiAuth";

// RESOURCES
import { getAllResources } from "./apiResource";

export {
  // SUPABASE
  supabaseUrl,
  supabase,

  // PETS
  getAllPets,
  getLostPets,
  getFoundPets,
  getReunitedPets,
  getSinglePet,
  getUserPets,

  // AUTH
  loginWithGoogle,
  login,
  getCurrentUser,
  logout,
  signup,
  resendEmailConfirmation,

  // RESOURCES
  getAllResources,
};
