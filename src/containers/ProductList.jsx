import React, { useState } from "react";
import ProductItem from "@components/ProductItem";
import useProducts from "@hooks/useProducts";
import "@styles/ProductList.scss";
import PortalProductDetail from "./ProductDetail";

const ProductList = () => {
  const { products, loading } = useProducts();
  const [detailOpen, setDetailOpen] = useState(true);

  const handleDetailOpen = () => {
    setDetailOpen(true);
  };
  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem
            key={product.title}
            {...product}
            openDetail={handleDetailOpen}
          />
        ))}
      </div>
      {detailOpen && <PortalProductDetail id={1} onClose={handleDetailClose} />}
    </section>
  );
};

export default React.memo(ProductList);
