// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getChatConnection as getChatConnectionApi } from "../../services";

export const useGetChatConnection = () => {
  const { data: chatConnection, isPending } = useQuery({
    queryFn: () => getChatConnectionApi(),
    queryKey: ["chatConnections"],
  });

  return { chatConnection, isPending };
};
