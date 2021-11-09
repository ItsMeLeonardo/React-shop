import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import iconAddToCard from "@icons/bt_add_to_cart.svg";
import { AppContext } from "../context/AppContext";

const ProductItem = (props) => {
  const { title, image, price } = props;

  const { addToCard } = useContext(AppContext);

  const handleToggleCart = (product) => {
    addToCard(product);
  };

  return (
    <div className="ProductItem">
      <img src={image} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure
          onClick={() => handleToggleCart(props)}
          className="btn btn-icon"
        >
          <img src={iconAddToCard} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default React.memo(ProductItem, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
