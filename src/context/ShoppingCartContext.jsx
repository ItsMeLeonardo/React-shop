// @ts-check
import React, { useState, useEffect, useCallback } from "react";

const ShoppingCartContext = React.createContext({});

/**
 *
 * @param {Array} shopCart array of products for calc the total price
 * @returns {Number} total price of cart
 */
const calculateTotalPrice = (shopCart) => {
  return shopCart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
};

/**
 * @param {Array} shopCart an Array of products to sum the quantity
 * @returns {Number} the total items in the cart
 */
const calculateTotalItems = (shopCart) => {
  return shopCart.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );
};

function ShoppingCartProvider({ children }) {
  // get shopping cart from session storage or create an empty Array
  const [shopCart, setShopCart] = useState(() => {
    const shopCart = sessionStorage.getItem("shopCart");
    return shopCart ? JSON.parse(shopCart) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const pay = useCallback(() => {
    setShopCart([]);
  }, [setShopCart]);

  useEffect(() => {
    setTotalPrice(Number(calculateTotalPrice(shopCart).toFixed(2)));
    setTotalItems(calculateTotalItems(shopCart));
    sessionStorage.setItem("shopCart", JSON.stringify(shopCart));
  }, [shopCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        shopCart,
        setShopCart,
        totalPrice,
        setTotalPrice,
        totalItems,
        setTotalItems,
        pay,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
