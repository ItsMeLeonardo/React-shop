import React, { useRef, useState } from "react";

import logoYard from "@logos/logo_yard_sale.svg";
import "@styles/Login.scss";
import { useHistory } from "react-router-dom";

// TODO: add service for login
const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const formRef = useRef(null);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fromData = new FormData(formRef.current);
    const data = {
      email: fromData.get("email"),
      password: fromData.get("password"),
    };

    // setTimeout(() => {
    //   history.push("/");
    // }, 4000);
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logoYard} alt="logo" className="logo" />
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          {loginError && (
            <span className="error-message">
              Please check your information, the email or password are incorrect
            </span>
          )}
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className={`input input-email ${loginError ? "error" : ""}`}
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className={`input input-password ${loginError ? "error" : ""}`}
          />

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
