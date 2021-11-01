import React, { useState } from "react";
import "@styles/ProductItem.scss";
import addToCard from "@icons/bt_add_to_cart.svg";
import iconClose from "@icons/icon_close.png";

const ProductItem = ({ title, images, price }) => {
  const [cart, setCart] = useState(true);

  const handleToggleCart = () => {
    setCart(!cart);
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={handleToggleCart} className="btn btn-icon">
          <img src={cart ? addToCard : iconClose} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
