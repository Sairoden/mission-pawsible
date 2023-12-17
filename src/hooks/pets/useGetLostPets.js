// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getLostPets } from "../../services";

export const useGetLostPets = () => {
  const { data: { data: lostPets, count } = {}, isPending } = useQuery({
    queryKey: ["lostPets"],
    queryFn: getLostPets,
  });

  return { lostPets, isPending, count };
};
