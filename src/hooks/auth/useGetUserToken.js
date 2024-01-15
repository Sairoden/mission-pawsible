// REACT & LIBRARIES
import { useMutation } from "@tanstack/react-query";

// SERVICES
import { getUserToken } from "../../services";
import { useState } from "react";

export const useGetUserToken = () => {
  const [token, setToken] = useState("");

  const { mutate: userToken, isPending } = useMutation({
    mutationFn: getUserToken,
    onSuccess: data => {
      setToken(data);
    },
  });

  return { userToken, isPending, token };
};
