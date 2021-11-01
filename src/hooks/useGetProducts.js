import React, { useEffect, useState } from "react";

export default function useGetProducts(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return { products };
}
