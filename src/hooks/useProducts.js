import { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/getProducts";
import { ProductContext } from "@context/ProductContext";

export default function useGetProducts() {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}
