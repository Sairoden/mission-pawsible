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
      queryClient.setQueryData(["user", user?.user]);
      toast.success("You have successfully logged in.");
      navigate("/");
    },
    onError: err => toast.error(err.message),
    onSettled: () => queryClient.refetchQueries(["user"]),
  });

  return { login, isPending };
};
