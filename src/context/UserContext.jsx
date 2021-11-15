import React, { useState } from "react";

const UserContext = React.createContext({});

function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState("");
  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
