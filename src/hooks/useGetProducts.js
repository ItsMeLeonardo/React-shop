import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";

export default function useGetProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return { products };
}
