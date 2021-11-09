import React, { useContext, useState } from "react";

import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";

import "@styles/Header.scss";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import { AppContext } from "@context/AppContext";

const Header = () => {
  const { state, totalItems } = useContext(AppContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState("");

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
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenu}>
            platzi@example.com
          </li>
          <li className="btn navbar-shopping-cart" onClick={handleToggleOrder}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {!!state.card.length && <div>{totalItems}</div>}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {toggleOrders && <MyOrder hideMyOrder={handleToggleOrder} />}
    </nav>
  );
};

export default React.memo(Header);
