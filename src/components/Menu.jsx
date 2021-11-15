import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

import "@styles/Menu.scss";

const Menu = () => {
  const { logout } = useUser();

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
        <li className="BtnContent" onClick={() => logout()}>
          <Link to="/login" className="MenuBtn textBtnAlert">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
