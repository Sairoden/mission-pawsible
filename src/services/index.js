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
  updatePet,
  getUserPet,
  updatePetStatus,
  deletePet,
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
  forgotPassword,
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
  newMessageNotification,
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
  updatePet,
  getUserPet,
  updatePetStatus,
  deletePet,

  // AUTH
  loginWithGoogle,
  login,
  getCurrentUser,
  logout,
  signup,
  resendEmailConfirmation,
  updateProfile,
  forgotPassword,

  // RESOURCES
  getAllResources,

  // TOKENS
  getUserToken,

  // CHATS
  getChatMembers,
  getChatConnection,
  createChatConnection,
  newMessageNotification,

  // LOCATIONS
  getCoordsForAddress,
};
