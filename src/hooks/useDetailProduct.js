import { useState, useContext, useEffect } from "react";
import { ProductContext } from "@context/ProductContext";

export const useDetailProduct = (id) => {
  const { products } = useContext(ProductContext);
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    try {
      const product = products.find((product) => product.id === id);
      setProductDetail(product);
    } catch (error) {
      console.log(`exist and error while get detail ${error}`);
    }
  }, [id]);
  return { productDetail };
};
