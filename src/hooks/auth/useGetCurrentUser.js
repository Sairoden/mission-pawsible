// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

// SERVICES
import { getCurrentUser } from "../../services";

export const useGetCurrentUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isPending, data: user } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  if (user && location.pathname === "/login") navigate("/");
  if (
    (!user && location.pathname === "/account") ||
    (!user && location.pathname === "/account/update")
  )
    navigate("/");

  return { isPending, user, isAuthenticated: user?.role === "authenticated" };
};
