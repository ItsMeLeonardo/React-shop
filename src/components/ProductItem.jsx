import React, { useContext, useState } from "react";
import "@styles/ProductItem.scss";
import iconAddToCard from "@icons/bt_add_to_cart.svg";
import iconClose from "@icons/icon_close.png";
import { AppContext } from "../context/AppContext";

const ProductItem = (props) => {
  const { title, images, price } = props;
  const [inCart, setInCart] = useState(false);

  const { addToCard, removeFromCard } = useContext(AppContext);

  const handleToggleCart = (product) => {
    addToCard(product);
    setInCart(!inCart);
    if (inCart) {
      removeFromCard(product.id);
    }
  };

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure
          onClick={() => handleToggleCart(props)}
          className="btn btn-icon"
        >
          <img src={inCart ? iconClose : iconAddToCard} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
