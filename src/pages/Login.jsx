import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "@hooks/useUser";

import logoYard from "@logos/logo_yard_sale.svg";
import "@styles/Login.scss";

// TODO: add service for login
const Login = () => {
  const { isLogged, login, error } = useUser();
  const formRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => {
        history.push("/");
      }, 1500);
    }
  }, [isLogged, history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fromData = new FormData(formRef.current);
    const data = {
      // email: fromData.get("email"),
      username: fromData.get("username"),
      password: fromData.get("password"),
    };
    login(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logoYard} alt="logo" className="logo" />
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          {/* <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className={`input input-email ${error ? "error" : ""}`}
          /> */}
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="platzi@example.cm"
            className={`input input-email ${error ? "error" : ""}`}
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className={`input input-password ${error ? "error" : ""}`}
          />
          {error && <span className="error-message">{error.msg}</span>}
          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
