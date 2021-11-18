import React, { useState } from "react";

const ShoppingCartContext = React.createContext({});

function ShoppingCartProvider({ children }) {
  // get shopping cart from session storage or create an empty Array
  const [shopCart, setShopCart] = useState(() => {
    const shopCart = sessionStorage.getItem("shopCart");
    return shopCart ? JSON.parse(shopCart) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <ShoppingCartContext.Provider
      value={{
        shopCart,
        setShopCart,
        totalPrice,
        setTotalPrice,
        totalItems,
        setTotalItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
