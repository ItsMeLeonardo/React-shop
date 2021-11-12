import React from "react";

const AppContext = React.createContext({});

function AppContextProvider({ children, value }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
