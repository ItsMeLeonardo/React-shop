import { useState } from "react";

const INITIAL_STATE = {
  card: [],
};

export function useInitialState() {
  const [state, setState] = useState(INITIAL_STATE);

  const addToCard = (product) => {
    setState({
      ...state,
      card: [...state.card, product],
    });
  };

  return { state, addToCard };
}
