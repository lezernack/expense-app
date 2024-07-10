import { useEffect } from "react";
import { useUser } from "../queries/user.js";
import { queryClient } from "../constants/config.js";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

const AuthGuard = ({ children }) => {
  const {
    data: user,
    isLoading: userLoading,
    isRefetching: userRefetching,
  } = useUser();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.data?.userId) {
      if (pathname === "/auth" || pathname === "/register") {
        navigate("/");
      } else navigate(pathname);
    }

    if (!userLoading && !user?.data && !userRefetching) {
      if (pathname !== "/auth" && pathname !== "/regiser") {
        queryClient.removeQueries();
        navigate("/auth");
        return;
      }
      return;
    }
  }, [user, userLoading, userRefetching, pathname, navigate]);

  return (
    <>
      {userLoading ? <Spinner background={"transparent"} fullPage /> : children}
    </>
  );
};

export default AuthGuard;
