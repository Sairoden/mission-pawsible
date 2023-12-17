// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getReunitedPets } from "../../services";

export const useGetReunitedPets = () => {
  const { data: { data: reunitedPets, count } = {}, isPending } = useQuery({
    queryKey: ["reunitedPets"],
    queryFn: getReunitedPets,
  });

  return { reunitedPets, count, isPending };
};
