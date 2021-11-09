import { useState, useEffect } from "react";

const INITIAL_STATE = {
  card: [],
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

  const addToCard = (product) => {
    const newProduct = addQuantityToProduct(product);
    const productExists = state.card.find((p) => p.id === product.id);
    if (productExists) {
      productExists.quantity += 1;
      setState({ ...state });
    } else {
      setState({
        ...state,
        card: [...state.card, newProduct],
      });
    }
  };

  const removeFromCard = (id) => {
    const newCard = state.card.filter((product) => product.id !== id);
    setState({ ...state, card: newCard });
  };

  const removeOneFromCard = (id) => {
    const updatedCard = state.card.find((product) => product.id === id);
    if (updatedCard.quantity > 1) {
      updatedCard.quantity -= 1;
      setState({ ...state });
    } else {
      removeFromCard(id);
    }
  };

  const calculateTotalPrice = () => {
    return state.card.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  };

  const calculateTotalItems = () => {
    return state.card.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);
  };

  useEffect(() => {
    setTotalPrice(Number(calculateTotalPrice().toFixed(2)));
    setTotalItems(calculateTotalItems());
  }, [state]);

  return {
    state,
    addToCard,
    removeFromCard,
    totalPrice,
    totalItems,
    removeOneFromCard,
  };
}
