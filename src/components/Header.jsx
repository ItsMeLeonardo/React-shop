import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header() {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="menu" className="menu" />

      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Clothes</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Furnitures</Link>
          </li>
          <li>
            <Link to="/">Toys</Link>
          </li>
          <li>
            <Link to="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
