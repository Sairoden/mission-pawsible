// REACT & LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { login as loginApi } from "../../services";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: user => {
      console.log(user);
      queryClient.setQueryData(["user", user?.user]);
      toast.success("You have successfully logged in");
      navigate("/", { replace: true });
    },
    onError: err => toast.error(err.message),
  });

  return { login, isPending };
};
