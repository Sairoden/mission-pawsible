// REACT & LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { logout as logoutApi } from "../../services";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/");
      queryClient.removeQueries();
    },
    onError: err => toast.error(err.message),
  });

  return { logout, isPending };
};
