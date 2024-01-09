// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getAllPets } from "../../services";

export const useGetAllPets = () => {
  const { data: pets, isPending } = useQuery({
    queryKey: ["pets"],
    queryFn: getAllPets,
  });

  return { pets, isPending };
};
