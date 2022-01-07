import { useCallback, useContext, useState } from "react";
import { UserContext } from "@context/UserContext";
import loginService from "@services/login";

export default function useUser() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(
    ({ username, password }) => {
      setLoading(true);
      loginService(username, password)
        .then((res) => {
          sessionStorage.setItem("jwt", res.token);
          setLoading(false);
          setJwt(res.token);
        })
        .catch((err) => {
          console.log({ err });
          sessionStorage.removeItem("jwt");
          setError(err);
          setTimeout(() => {
            setError(null);
          }, 5000);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    setJwt(null);
    sessionStorage.removeItem("jwt");
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    error,
    loading,
  };
}
