import { useState, useEffect } from "react";

const addQuantityToProduct = (product) => {
  return {
    ...product,
    quantity: product.quantity || 1,
  };
};

export function useShoppingCart() {
  const [shopCart, setShopCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (product) => {
    try {
      const newProduct = addQuantityToProduct(product);
      const productExists = shopCart.find((p) => p.id === product.id);
      if (productExists) {
        productExists.quantity += 1;
        setShopCart([...shopCart]);
      } else {
        setShopCart([...shopCart, newProduct]);
      }
      return true;
    } catch (error) {
      console.log(
        `An error ocurred while added a product in the card \n Error => ${error}`
      );
      return false;
    }
  };

  const removeFromCart = (id) => {
    try {
      const newCart = shopCart.filter((product) => product.id !== id);
      setShopCart(newCart);
      return true;
    } catch (error) {
      console.log(
        `An error ocurred while removed a product from the card \n Error => ${error}`
      );
      return false;
    }
  };

  const removeOneFromCart = (id) => {
    const updatedCart = shopCart.find((product) => product.id === id);
    if (updatedCart.quantity > 1) {
      updatedCart.quantity -= 1;
      setShopCart([...shopCart]);
    } else {
      removeFromCart(id);
    }
  };

  const calculateTotalPrice = () => {
    return shopCart.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  };

  const calculateTotalItems = () => {
    return shopCart.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
  };

  useEffect(() => {
    setTotalPrice(Number(calculateTotalPrice().toFixed(2)));
    setTotalItems(calculateTotalItems());
  }, [shopCart]);

  shoppingCartValue = {
    shopCart,
    addToCart,
    removeFromCart,
    totalPrice,
    totalItems,
    removeOneFromCart,
  };
}
