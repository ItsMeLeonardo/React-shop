import React from "react";
import ReactDOM from "react-dom";
import { useDetailProduct } from "@hooks/useDetailProduct";

import ProductInfo from "@components/ProductInfo";
import iconClose from "@icons/icon_close.png";
import "@styles/ProductDetail.scss";

const ProductDetail = ({ id, onClose }) => {
  const { productDetail } = useDetailProduct(id);

  return (
    <aside className="ProductDetail glass-light">
      <div role="button" onClick={onClose} className="ProductDetail-close">
        <img src={iconClose} alt="close" />
      </div>
      <ProductInfo product={productDetail} />
    </aside>
  );
};

export default function PortalProductDetail({ id, onClose }) {
  return ReactDOM.createPortal(
    <ProductDetail id={id} onClose={onClose} />,
    document.getElementById("root-modal")
  );
}
