import { useCallback, useContext, useState } from "react";
import { UserContext } from "@context/UserContext";
import loginService from "@services/login";

export default function useUser() {
  const [error, setError] = useState(null);
  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(
    ({ username, password }) => {
      loginService(username, password)
        .then((res) => {
          if (res.status === "Error") {
            setError(res);
            setTimeout(() => {
              setError(null);
            }, 5000);
          } else {
            sessionStorage.setItem("jwt", res.token);
            setJwt(res.token);
          }
        })
        .catch(() => {
          sessionStorage.removeItem("jwt");
        });
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    setJwt(null);
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    error,
  };
}
