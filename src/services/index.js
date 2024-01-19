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
  createPet,
} from "./apiPets";

// AUTH
import {
  loginWithGoogle,
  login,
  getCurrentUser,
  logout,
  signup,
  resendEmailConfirmation,
  updateProfile,
} from "./apiAuth";

// RESOURCES
import { getAllResources } from "./apiResource";

// TOKENS
import { getUserToken } from "./apiToken";

// CHATS
import {
  createChatConnection,
  getChatMembers,
  getChatConnection,
} from "./apiChats";

// LOCATIONS
import { getCoordsForAddress } from "./apiLocation";

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
  createPet,

  // AUTH
  loginWithGoogle,
  login,
  getCurrentUser,
  logout,
  signup,
  resendEmailConfirmation,
  updateProfile,

  // RESOURCES
  getAllResources,

  // TOKENS
  getUserToken,

  // CHATS
  getChatMembers,
  getChatConnection,
  createChatConnection,

  // LOCATIONS
  getCoordsForAddress,
};
