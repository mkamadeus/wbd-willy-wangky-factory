import { useCallback, useEffect, useState } from "react";
import { checkSession } from "@/api/auth";
import { useHistory } from "react-router-dom";

const useLogin = () => {
  const history = useHistory();

  const checkLoginStatus = useCallback(async () => {
    const status = (await checkSession()) as boolean;
    if (status) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);
};

export default useLogin;
