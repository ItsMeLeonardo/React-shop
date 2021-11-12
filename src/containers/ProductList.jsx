import React, { useState } from "react";
import ProductItem from "@components/ProductItem";
import useProducts from "@hooks/useProducts";
import "@styles/ProductList.scss";
import PortalProductDetail from "./ProductDetail";

const ProductList = () => {
  const { products, loading } = useProducts();
  const [detailOpen, setDetailOpen] = useState(false);
  const [idProductDetail, setIdProductDetail] = useState(1);

  const handleDetailOpen = (id) => {
    setIdProductDetail(id);
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
      {detailOpen && (
        <PortalProductDetail id={idProductDetail} onClose={handleDetailClose} />
      )}
    </section>
  );
};

export default React.memo(ProductList);
