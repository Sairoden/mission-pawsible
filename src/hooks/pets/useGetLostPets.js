// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getLostPets } from "../../services";

export const useGetLostPets = () => {
  const { data: { data: lostPets, count } = {}, isPending } = useQuery({
    queryKey: ["lostPets"],
    queryFn: getLostPets,
  });

  return { lostPets, isPending, count };
};
