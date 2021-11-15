import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useUser from "@hooks/useUser";

import logoYard from "@logos/logo_yard_sale.svg";
import "@styles/Login.scss";
import useUserInfo from "../hooks/useUserInfo";

const Login = () => {
  const { isLogged, login, error } = useUser();
  const { findUser } = useUserInfo();
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
    findUser(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <h1 className="title">Sign in</h1>
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
        <Link to="/signup">
          <button className="secondary-button signup-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
