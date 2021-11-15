import React, { useState } from "react";

const savedJwt = sessionStorage.getItem("jwt");

const UserContext = React.createContext({});

function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => savedJwt);
  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
