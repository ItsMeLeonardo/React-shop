import React, { useEffect, useState } from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";

const API_URL = "https://api.escuelajs.co/api/v1/products?limit=10&offset=0";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
