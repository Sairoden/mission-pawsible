// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getAllResources } from "../../services/apiResource";

export const useGetResources = () => {
  const { data: resources, isPending } = useQuery({
    queryKey: ["resources"],
    queryFn: getAllResources,
    staleTime: 3600000,
  });

  return { resources, isPending };
};
