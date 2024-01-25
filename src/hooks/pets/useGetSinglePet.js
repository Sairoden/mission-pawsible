// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

// SERVICES
import { getSinglePet } from "../../services";

export const useGetSinglePet = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const { data: pet, isPending } = useQuery({
    queryKey: ["pets, userPets"],
    queryFn: () => getSinglePet(petId),
  });

  if (!pet) navigate("/");

  return { pet, isPending };
};
