import React from "react";
import "@styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu glass-light">
      <ul className="Menu-list">
        <li className="BtnContent">
          <Link to="/orders" className="MenuBtn textBtnPrimary ">
            My orders
          </Link>
        </li>
        <li className="BtnContent">
          <a className="MenuBtn textBtnPrimary" href="/">
            My account
          </a>
        </li>
        <li className="BtnContent">
          <a className="MenuBtn textBtnAlert" href="/">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
