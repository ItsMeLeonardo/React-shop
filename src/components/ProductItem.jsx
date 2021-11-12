import React, { useContext, useState } from "react";

import "@styles/ProductItem.scss";
import iconAddToCart from "@icons/bt_add_to_cart.svg";
import iconAddedToCart from "@icons/bt_added_to_cart.svg";
import { AppContext } from "../context/AppContext";

const ProductItem = (props) => {
  const [productInCart, setProductInCart] = useState(false);
  const { title, image, price, id, openDetail } = props;

  const { addToCart, removeFromCart } = useContext(AppContext);

  const handleToggleCart = (product) => {
    setProductInCart(!productInCart);
    if (productInCart) {
      setProductInCart(!removeFromCart(id));
    } else {
      setProductInCart(addToCart(product));
    }
  };

  return (
    <div className="ProductItem">
      <img
        role="button"
        onClick={() => openDetail(id)}
        className="ProductItem-img"
        src={image}
        alt={title}
      />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure
          onClick={() => handleToggleCart(props)}
          className="btn btn-icon"
          role="button"
        >
          <img
            src={productInCart ? iconAddedToCart : iconAddToCart}
            alt="icon cart"
          />
        </figure>
      </div>
    </div>
  );
};

export default React.memo(ProductItem, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
