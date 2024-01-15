// REACT & LIBRARIES
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

// STYLES
import { toast } from "react-hot-toast";

// SERVICES
import { getCurrentUser } from "../../services";
import { useEffect } from "react";

export const useGetCurrentUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isPending, data: user = {} } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  useEffect(() => {
    if (
      (user && location.pathname === "/login") ||
      (user && location.pathname === "/signup")
    ) {
      toast.error("You are already logged in");
      navigate("/");
    }
    if (
      (!user && location.pathname === "/account") ||
      (!user && location.pathname === "/account/update") ||
      (!user && location.pathname === "/report") ||
      (!user && location.pathname === "/chat")
    ) {
      toast.error("Please create an account");
      navigate("/signup");
    }
  }, [user, location, navigate]);

  return { isPending, user, isAuthenticated: user?.role === "authenticated" };
};
