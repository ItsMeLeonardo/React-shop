import React, { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import useUser from "@hooks/useUser";

import logoYard from "@logos/logo_yard_sale.svg";
import "@styles/Login.scss";
import useUserInfo from "../hooks/useUserInfo";

const Login = () => {
  const { isLogged, login, error, loading } = useUser();
  const { findUser } = useUserInfo();
  const formRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (isLogged && !loading) {
      history.push("/");
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
        <form className="Login-form" ref={formRef} onSubmit={handleSubmit}>
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
            className={`Login-input ${error ? "error" : ""}`}
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className={`Login-input ${error ? "error" : ""}`}
          />
          {error && <span className="error-message">{error.msg}</span>}
          <input
            type="submit"
            value="Log in"
            className={`${
              loading ? "loading" : ""
            } primary-button login-button`}
          />
          <Link to="/send-email">Forgot my password</Link>
        </form>
        <Link to="/signup">
          <button className="secondary-button signup-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
