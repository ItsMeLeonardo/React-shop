import { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/getProducts";
import { ProductContext } from "@context/ProductContext";

export default function useProducts() {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setLoading(true);
      getProducts().then((products) => {
        setProducts(products);
        setLoading(false);
      });
    }
  }, []);

  return { products, loading };
}
