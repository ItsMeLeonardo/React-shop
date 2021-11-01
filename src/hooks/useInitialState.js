import { useState, useEffect } from "react";

const INITIAL_STATE = {
  card: [],
};

export function useInitialState() {
  const [state, setState] = useState(INITIAL_STATE);
  const [total, setTotal] = useState(0);

  const addToCard = (product) => {
    setState({
      ...state,
      card: [...state.card, product],
    });
  };

  const removeFromCard = (id) => {
    setState({
      ...state,
      card: state.card.filter((product) => product.id !== id),
    });
  };

  const calculateTotal = () => {
    return state.card.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  };

  useEffect(() => {
    setTotal(calculateTotal());
  }, [state]);

  return { state, addToCard, removeFromCard, total };
}
