import React, { useState } from "react";
import ProductItem from "@components/ProductItem";
import useProducts from "@hooks/useProducts";
import useShoppingCart from "@hooks/useShoppingCart";
import PortalProductDetail from "./ProductDetail";

import ProductLoader from "@loaders/ProductLoader";
import "@styles/ProductList.scss";

// FIXME: resolve the rerendering problem :c
const ProductList = () => {
  const { products, loading } = useProducts();
  const { addToCart, removeFromCart } = useShoppingCart();
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
    return (
      <div className="ProductList">
        {new Array(8).fill().map((_, index) => (
          <ProductLoader key={index} />
        ))}
      </div>
    );
  }

  return (
    <section className="main-container">
      <div className="ProductList">
        {products?.map((product) => (
          <ProductItem
            key={product.title?.slice(0, 18)}
            product={product}
            openDetail={handleDetailOpen}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      {detailOpen && (
        <PortalProductDetail id={idProductDetail} onClose={handleDetailClose} />
      )}
    </section>
  );
};

// export default React.memo(ProductList);
export default ProductList;
