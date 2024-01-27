// REACT & LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";

// TOAST
import toast from "react-hot-toast";

// SERVICES
import { deletePet as deletePetApi } from "../../services";

export const useDeletePet = () => {
  const queryClient = useQueryClient();

  const { mutate: deletePet, isPending } = useMutation({
    mutationFn: deletePetApi,
    onSuccess: () => {
      toast.success("Pet successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["userPets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { deletePet, isPending };
};
