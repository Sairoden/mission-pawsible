// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getUserPets } from "../../services";

export const useGetUserPets = () => {
  const { data: userPets, isPending } = useQuery({
    queryFn: getUserPets,
    queryKey: ["userPets"],
  });

  return { userPets, isPending };
};
