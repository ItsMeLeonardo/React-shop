import React from "react";
import ProductList from "@containers/ProductList";

const Home = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default React.memo(Home, (prevProps, nextProps) => {
  return prevProps.match.path === nextProps.match.path;
});
