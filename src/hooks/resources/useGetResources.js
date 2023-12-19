// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getAllResources } from "../../services/apiResource";

export const useGetResources = () => {
  const { data: resources, isPending } = useQuery({
    queryKey: ["resources"],
    queryFn: getAllResources,
  });

  return { resources, isPending };
};
