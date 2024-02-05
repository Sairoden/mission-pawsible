// REACT & LIBRARIES
import { useEffect } from "react";
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

  useEffect(() => {
    if (!userPet) navigate("/account");
  }, [navigate, userPet]);

  return { userPet, isPending };
};
