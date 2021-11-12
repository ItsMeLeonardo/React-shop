import React, { useState } from "react";

const ProductContext = React.createContext({});

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
