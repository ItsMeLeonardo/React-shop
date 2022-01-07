import React, { useState } from "react";
import useShoppingCart from "@hooks/useShoppingCart";

import iconAddToCart from "@icons/bt_add_to_cart.svg";
import iconAddedToCart from "@icons/bt_added_to_cart.svg";
import "@styles/ProductItem.scss";

function ProductItem({ product, openDetail, addToCart, removeFromCart }) {
  const [productInCart, setProductInCart] = useState(false);
  const { title, image, price, id } = product;

  const handleToggleCart = (product) => {
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
          onClick={() => handleToggleCart(product)}
          className="btn btn-icon"
          role="button"
        >
          <img
            className="ProductItem-img"
            src={productInCart ? iconAddedToCart : iconAddToCart}
            alt="icon cart"
          />
        </figure>
      </div>
    </div>
  );
}
/* function only when show detail, in at to cart not fount */
export default React.memo(ProductItem, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id;
});
