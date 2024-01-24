// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import toast from "react-hot-toast";

// Services
import { signup as signupApi } from "../../services";

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Check your email for confirmation");
      navigate("/login");
    },
    onError: err => toast.error(err.message),
  });

  return { signup, isPending };
};
