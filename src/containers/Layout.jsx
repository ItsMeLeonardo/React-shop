import React from "react";
import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header id={2} />
      {children}
    </div>
  );
};

export default Layout;
