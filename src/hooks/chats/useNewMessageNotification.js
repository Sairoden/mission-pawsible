// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// SERVICES
import { newMessageNotification as newMessageNotificationApi } from "../../services";

export const useNewMessageNotification = () => {
  const { mutate: newMessageNotification } = useMutation({
    mutationFn: newMessageNotificationApi,
  });

  return { newMessageNotification };
};
