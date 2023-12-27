// SUPABASE
import { supabaseUrl, supabase } from "./supabase";

// PETS
import {
  getAllPets,
  getLostPets,
  getFoundPets,
  getReunitedPets,
  getSinglePet,
} from "./apiPets";

// AUTH
import {
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

  // AUTH
  login,
  getCurrentUser,
  logout,
  signup,
  resendEmailConfirmation,

  // RESOURCES
  getAllResources,
};
