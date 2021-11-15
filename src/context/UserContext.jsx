import React, { useState } from "react";

const savedJwt = sessionStorage.getItem("jwt");

const UserContext = React.createContext({});

function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => savedJwt);
  const [user, setUser] = useState(() => {
    const savedUserInfo = sessionStorage.getItem("userInfo");
    return savedUserInfo ? JSON.parse(savedUserInfo) : null;
  });

  return (
    <UserContext.Provider value={{ jwt, setJwt, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
