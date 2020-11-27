import { useCallback, useEffect } from "react";
import { checkSession } from "@/api/auth";
import { useHistory, useLocation } from "react-router-dom";

const useLogin = () => {
  const history = useHistory();
  const location = useLocation();

  const checkLoginStatus = useCallback(async () => {
    const status = (await checkSession()) as boolean;
    if (status) {
      console.log(location.pathname);
      history.push(location.pathname !== "/login" ? location.pathname : "/");
    } else {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);
};

export default useLogin;
