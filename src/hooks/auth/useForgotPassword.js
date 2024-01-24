// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { forgotPassword as forgotPasswordApi } from "../../services";

export const useForgotPassword = () => {
  const { mutate: forgotPassword, isPending } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => {
      toast.success("Check your email for password reset");
    },
    onError: err => toast.error(err.message),
  });

  return { forgotPassword, isPending };
};
