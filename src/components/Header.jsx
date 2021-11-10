import React, { useContext, useRef, useState } from "react";

import Menu from "@components/Menu";
import CategoryItem from "@components/CategoryItem";
import MyOrder from "@containers/MyOrder";
import { AppContext } from "@context/AppContext";
import useGetCategories from "@hooks/useGetCategories";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import "@styles/Header.scss";

const Header = () => {
  const { state, totalItems } = useContext(AppContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState("");
  const { categories } = useGetCategories();
  const refCategoryContainer = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleToggleOrder = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-nav" />
        <ul ref={refCategoryContainer}>
          {categories?.map((category) => (
            <CategoryItem
              key={category.name}
              category={category}
              parentRef={refCategoryContainer}
            />
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenu}>
            platzi@example.com
          </li>
          <li className="btn navbar-shopping-cart" onClick={handleToggleOrder}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {!!state.cart.length && <div>{totalItems}</div>}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {toggleOrders && <MyOrder hideMyOrder={handleToggleOrder} />}
    </nav>
  );
};

export default React.memo(Header);
