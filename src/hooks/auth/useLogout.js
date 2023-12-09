// REACT & LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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
  });

  return { logout, isPending };
};
