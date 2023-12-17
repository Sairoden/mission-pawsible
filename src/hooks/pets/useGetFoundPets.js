// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getFoundPets } from "../../services";

export const useGetFoundPets = () => {
  const { data: { data: foundPets, count } = {}, isPending } = useQuery({
    queryKey: ["foundPets"],
    queryFn: getFoundPets,
  });

  return { foundPets, count, isPending };
};
