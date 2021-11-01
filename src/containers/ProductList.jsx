import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/ProductList.scss";

const API_URL = "https://api.escuelajs.co/api/v1/products?limit=10&offset=0";

const ProductList = () => {
  const { products } = useGetProducts(API_URL);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
