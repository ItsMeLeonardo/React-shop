import { useContext } from "react";
import { ShoppingCartContext } from "@context/ShoppingCartContext";

export const useShoppingCart = () => {
  const { addToCart, removeFromCart, removeOneFromCart } =
    useContext(ShoppingCartContext);

  return {
    addToCart,
    removeFromCart,
    removeOneFromCart,
  };
};
