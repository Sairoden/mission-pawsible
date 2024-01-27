// Auth
import { useLogin } from "./auth/useLogin";
import { useLoginWithGoogle } from "./auth/useLoginWithGoogle";
import { useGetCurrentUser } from "./auth/useGetCurrentUser";
import { useLogout } from "./auth/useLogout";
import { useSignup } from "./auth/useSignup";
import { useResendEmail } from "./auth/useResendEmail";
import { useGetUserToken } from "./auth/useGetUserToken";
import { useUpdateProfile } from "./auth/useUpdateProfile";
import { useForgotPassword } from "./auth/useForgotPassword";

// PETS
import { useGetAllPets } from "./pets/useGetAllPets";
import { useGetLostPets } from "./pets/useGetLostPets";
import { useGetFoundPets } from "./pets/useGetFoundPets";
import { useGetReunitedPets } from "./pets/useGetReunitedPets";
import { useGetSinglePet } from "./pets/useGetSinglePet";
import { useGetUserPets } from "./pets/useGetUserPets";
import { useCreatePet } from "./pets/useCreatePet";
import { useUpdatePet } from "./pets/useUpdatePet";
import { useGetUserPet } from "./pets/useGetUserPet";

// RESOURCES
import { useGetResources } from "./resources/useGetResources";

// CHATS
import { useCreateChatConnection } from "./chats/useCreateChatConnection";
import { useGetChatMembers } from "./chats/useGetChatMembers";
import { useGetChatConnection } from "./chats/useGetChatConnection";
import { useNewMessageNotification } from "./chats/useNewMessageNotification";

// UTILS
import { useOutsideClick } from "./utils/useOutsideClick";

export {
  // AUTH
  useLoginWithGoogle,
  useLogin,
  useGetCurrentUser,
  useLogout,
  useSignup,
  useResendEmail,
  useGetUserToken,
  useUpdateProfile,
  useForgotPassword,

  // PETS
  useGetAllPets,
  useGetLostPets,
  useGetFoundPets,
  useGetReunitedPets,
  useGetSinglePet,
  useGetUserPets,
  useCreatePet,
  useUpdatePet,
  useGetUserPet,

  // RESORUCES
  useGetResources,

  // CHATS
  useGetChatMembers,
  useCreateChatConnection,
  useGetChatConnection,
  useNewMessageNotification,

  // UTILS
  useOutsideClick,
};
