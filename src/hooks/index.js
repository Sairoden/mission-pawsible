// Auth
import { useLogin } from "./auth/useLogin";
import { useGetCurrentUser } from "./auth/useGetCurrentUser";
import { useLogout } from "./auth/useLogout";
import { useSignup } from "./auth/useSignup";
import { useResendEmail } from "./auth/useResendEmail";

// PETS
import { useGetLostPets } from "./pets/useGetLostPets";
import { useGetFoundPets } from "./pets/useGetFoundPets";
import { useGetReunitedPets } from "./pets/useGetReunitedPets";

// RESOURCES
import { useGetResources } from "./resources/useGetResources";

export {
  // AUTH
  useLogin,
  useGetCurrentUser,
  useLogout,
  useSignup,
  useResendEmail,

  // PETS
  useGetLostPets,
  useGetFoundPets,
  useGetReunitedPets,

  // RESORUCES
  useGetResources,
};
