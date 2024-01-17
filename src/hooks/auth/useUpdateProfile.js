// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import { updateProfile as updateProfileApi } from "../../services";

export const useUpdateProfile = () => {
  const navigate = useNavigate();

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      toast.success("Successfully updated profile");
      navigate("/account");
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { updateProfile, isPending };
};
