// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// SERVICES
import { loginWithGoogle as loginWithGoogleApi } from "../../services";

export const useLoginWithGoogle = () => {
  const { mutate: loginWithGoogle, isPending } = useMutation({
    mutationFn: loginWithGoogleApi,
  });

  return { loginWithGoogle, isPending };
};
