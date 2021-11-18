import React, { useState, useEffect, useCallback } from "react";

const ShoppingCartContext = React.createContext({});

const addQuantityToProduct = (product) => {
  return {
    ...product,
    quantity: product.quantity || 1,
  };
};

function ShoppingCartProvider({ children }) {
  // get shopping cart from session storage or create an empty Array
  const [shopCart, setShopCart] = useState(() => {
    const shopCart = sessionStorage.getItem("shopCart");
    return shopCart ? JSON.parse(shopCart) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  /**
   *
   * @param {Object} product a product to add to the cart
   * @returns {Boolean} true if product was added in the cart.
   */
  const addToCart = (product) => {
    try {
      const productExists = shopCart.find((p) => p.id === product.id);
      if (productExists) {
        productExists.quantity += 1;
        setShopCart([...shopCart]);
      } else {
        const newProduct = addQuantityToProduct(product);
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

  /**
   * this function will remove a product from the cart
   * @param {Number} id the id of the product to remove no matter the quantity
   * @returns {Boolean} true if the product was removed from the cart
   */
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

  /**
   *
   * this method only subtract the quantity of the product in 1, if the quantity is 1, the product is removed from the cart
   * @param {Number} id id of the product to remove.
   * @returns {Number} the new quantity of the product.
   */
  const removeOneFromCart = (id) => {
    const updatedCart = shopCart.find((product) => product.id === id);
    if (updatedCart.quantity > 1) {
      updatedCart.quantity -= 1;
      setShopCart([...shopCart]);
      return updatedCart;
    } else {
      removeFromCart(id);
      return 0;
    }
  };

  const pay = useCallback(() => {
    setShopCart([]);
  }, [setShopCart]);

  /**
   *
   * @returns {Number} the total price of the cart
   */
  const calculateTotalPrice = () => {
    return shopCart.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  };

  /**
   *
   * @returns {Number} the total items in the cart
   */
  const calculateTotalItems = () => {
    return shopCart.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
  };

  useEffect(() => {
    setTotalPrice(Number(calculateTotalPrice().toFixed(2)));
    setTotalItems(calculateTotalItems());
    sessionStorage.setItem("shopCart", JSON.stringify(shopCart));
  }, [shopCart]);

  const shoppingCartValue = {
    shopCart,
    addToCart,
    removeFromCart,
    totalPrice,
    totalItems,
    removeOneFromCart,
    pay,
  };

  return (
    <ShoppingCartContext.Provider value={shoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
