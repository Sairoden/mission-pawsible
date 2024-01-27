// REACT & LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { updatePetStatus as updatePetStatusApi } from "../../services";

export const useUpdatePetStatus = () => {
  const queryClient = useQueryClient();

  const { mutate: updatePetStatus, isPending } = useMutation({
    mutationFn: updatePetStatusApi,
    onSuccess: () => {
      toast.success("Pet is successfully reunited");
      queryClient.invalidateQueries({ queryKey: ["userPets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { updatePetStatus, isPending };
};
