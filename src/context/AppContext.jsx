import React from "react";

const AppContext = React.createContext({});

export function AppContextProvider({ children, value }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };
