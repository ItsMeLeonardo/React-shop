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
          <Link to="/account" className="MenuBtn textBtnPrimary">
            My account
          </Link>
        </li>
        <li className="BtnContent">
          <Link to="/login" className="MenuBtn textBtnAlert">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
