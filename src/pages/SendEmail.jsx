import React from "react";
import { Link } from "react-router-dom";

import logo from "@logos/logo_yard_sale.svg";
import emailIcon from "@icons/email.svg";
import "@styles/SendEmail.scss";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={emailIcon} alt="email" />
        </div>
        <Link to="/login" className="Link">
          <button className="primary-button login-button">Login</button>
        </Link>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
