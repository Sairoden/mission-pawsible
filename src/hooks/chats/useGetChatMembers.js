// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// SERVICES
import { getChatMembers } from "../../services";

export const useGetChatMembers = () => {
  const { petId } = useParams();

  let { data: chatMembers, isPending } = useQuery({
    queryKey: ["chatMembers"],
    queryFn: () => getChatMembers(petId),
  });

  return { chatMembers, isPending };
};
