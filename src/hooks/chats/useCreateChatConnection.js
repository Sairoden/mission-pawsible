// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// SERVICES
import { createChatConnection as createChatConnectionApi } from "../../services";

// CONTEXTS
import { useChatContext } from "../../contexts/chat_context";

export const useCreateChatConnection = () => {
  const { handleChatConnection } = useChatContext();
  const { petId } = useParams();

  const { mutate: createChatConnection, isPending } = useMutation({
    mutationFn: () => createChatConnectionApi(petId),
    onSuccess: data => {
      handleChatConnection(data);
    },
  });

  return { createChatConnection, isPending };
};
