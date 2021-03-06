import React from "react";

import iconAddToCart from "@icons/bt_add_to_cart.svg";
import "@styles/ProductInfo.scss";

const ProductInfo = ({ product }) => {
  return (
    <>
      <img className="" src={product?.image} alt={product?.title} />
      <div className="ProductInfo">
        <p className="Price">${product?.price}</p>
        <p className="Title">{product?.title}</p>
        <p className="Description">{product?.description}</p>
        <button className="primary-button add-to-cart-button">
          <img src={iconAddToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
