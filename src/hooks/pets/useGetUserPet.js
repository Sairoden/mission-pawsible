// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

// SERVICES
import { getUserPet } from "../../services";

export const useGetUserPet = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const { data: userPet, isPending } = useQuery({
    queryFn: () => getUserPet(petId),
    queryKey: ["userPets"],
  });

  if (!userPet) navigate("/account");

  return { userPet, isPending };
};
