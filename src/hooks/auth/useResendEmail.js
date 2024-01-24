// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { resendEmailConfirmation } from "../../services";

export const useResendEmail = () => {
  const { mutate: resendEmail, isPending } = useMutation({
    mutationFn: resendEmailConfirmation,
    onSuccess: () => {
      toast.success("Check your new email confirmation");
    },
    onError: err => toast.error(err.message),
  });

  return { resendEmail, isPending };
};
