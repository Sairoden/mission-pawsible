// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { resendEmailConfirmation } from "../../services";

export const useResendEmail = () => {
  const { mutate: resendEmail } = useMutation({
    mutationFn: resendEmailConfirmation,
    onSuccess: () => {
      toast.success("Please check your new email confirmation.");
    },
    onError: err => toast.error(err.message),
  });

  return { resendEmail };
};
