import React, { useState } from "react";
import "@styles/ProductItem.scss";
import addToCard from "@icons/bt_add_to_cart.svg";
import iconClose from "@icons/icon_close.png";

const ProductItem = () => {
  const [cart, setCart] = useState(true);

  const handleToggleCart = () => {
    setCart(!cart);
  };

  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleToggleCart} className="btn btn-icon">
          <img src={cart ? addToCard : iconClose} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
