import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "@context/UserContext";
import getUsers from "@services/getUsers";

const useUserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const [totalUsers, setTotalUsers] = useState([]);

  useEffect(() => {
    // FIXME: solve the multiple call to API
    if (totalUsers.length === 0) {
      getUsers().then(setTotalUsers);
    }
  }, [setTotalUsers]);

  const findUser = useCallback(
    ({ username }) => {
      const user = totalUsers.find((user) => user.username === username);
      if (user) {
        sessionStorage.setItem("userInfo", JSON.stringify(user));
        setUser(user);
      }
    },
    [totalUsers]
  );

  return { user, findUser };
};

export default useUserInfo;
