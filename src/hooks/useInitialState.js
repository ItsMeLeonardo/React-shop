import { useState, useEffect } from "react";

const INITIAL_STATE = {
  cart: [],
};

const addQuantityToProduct = (product) => {
  return {
    ...product,
    quantity: product.quantity || 1,
  };
};

export function useInitialState() {
  const [state, setState] = useState(INITIAL_STATE);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (product) => {
    try {
      const newProduct = addQuantityToProduct(product);
      const productExists = state.cart.find((p) => p.id === product.id);
      if (productExists) {
        productExists.quantity += 1;
        setState({ ...state });
      } else {
        setState({
          ...state,
          cart: [...state.cart, newProduct],
        });
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
      const newCart = state.cart.filter((product) => product.id !== id);
      setState({ ...state, cart: newCart });
      return true;
    } catch (error) {
      console.log(
        `An error ocurred while removed a product from the card \n Error => ${error}`
      );
      return false;
    }
  };

  const removeOneFromCart = (id) => {
    const updatedCart = state.cart.find((product) => product.id === id);
    if (updatedCart.quantity > 1) {
      updatedCart.quantity -= 1;
      setState({ ...state });
    } else {
      removeFromCart(id);
    }
  };

  const calculateTotalPrice = () => {
    return state.cart.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  };

  const calculateTotalItems = () => {
    return state.cart.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);
  };

  const productIsCart = (id) => {};

  useEffect(() => {
    setTotalPrice(Number(calculateTotalPrice().toFixed(2)));
    setTotalItems(calculateTotalItems());
  }, [state]);

  return {
    state,
    addToCart,
    removeFromCart,
    totalPrice,
    totalItems,
    removeOneFromCart,
  };
}
