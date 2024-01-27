// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { updatePet as updatePetApi } from "../../services";

export const useUpdatePet = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updatePet, isPending } = useMutation({
    mutationFn: ({ newPet, petId }) => updatePetApi(newPet, petId),
    onSuccess: () => {
      toast.success("Pet successfully edited");
      queryClient.invalidateQueries({ queryKey: ["pets", "userPets"] });
      navigate("/account");
    },
    onError: err => {
      toast.error(err.message);
      navigate("/account");
    },
  });

  return { updatePet, isPending };
};
