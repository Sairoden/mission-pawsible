// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { createPet as createPetApi } from "../../services";

export const useCreatePet = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createPet, isPending } = useMutation({
    mutationFn: createPetApi,
    onSuccess: () => {
      toast.success("New pet successfully registered");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      navigate("/account");
    },
    onError: err => toast.error(err.message),
  });

  return { createPet, isPending };
};
