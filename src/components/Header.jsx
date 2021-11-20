import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@components/Menu";
import CategoryItem from "@components/CategoryItem";
import MyOrder from "@containers/MyOrder";
import useGetCategories from "@hooks/useGetCategories";
import useUser from "@hooks/useUser";
import useShoppingCart from "@hooks/useShoppingCart";
import useUserInfo from "@hooks/useUserInfo";
import CategoryLoader from "@loaders/CategoryLoader";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import "@styles/Header.scss";

const Header = () => {
  const { shopCart, totalItems } = useShoppingCart();
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { categories, loading } = useGetCategories();
  const { isLogged } = useUser();
  const { user } = useUserInfo();
  const refCategoryContainer = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setTimeout(() => {
      // after 4s the menu will be closed
      setToggleMenu(false);
    }, 4000);
  };
  const handleToggleOrder = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link role="button" className="link-logo" to="/">
          <img src={logo} alt="logo" className="logo-nav" />
        </Link>
        <ul ref={refCategoryContainer}>
          {loading && <CategoryLoader />}
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
          {isLogged ? (
            <li className="navbar-email" onClick={handleToggleMenu}>
              {user?.email}
            </li>
          ) : (
            <Link to="/login" className="navbar-email">
              Sign in
            </Link>
          )}
          <li className="btn navbar-shopping-cart" onClick={handleToggleOrder}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {shopCart.length !== 0 && <div>{totalItems}</div>}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {toggleOrders && <MyOrder hideMyOrder={handleToggleOrder} />}
    </nav>
  );
};

export default Header;
