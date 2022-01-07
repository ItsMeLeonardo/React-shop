import React, { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import useUser from "@hooks/useUser";
import useUserInfo from "../hooks/useUserInfo";

import logoYard from "@logos/logo_yard_sale.svg";
import "@styles/Login.scss";

const Login = () => {
  const { isLogged, login, error, loading } = useUser();
  const { findUser } = useUserInfo();
  const formRef = useRef(null);
  const history = useHistory();

  console.log({ error });

  useEffect(() => {
    if (isLogged && !loading) {
      history.push("/");
    }
  }, [isLogged, history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username.length === 0 || password.length === 0) return;
    const data = {
      // email: fromData.get("email"),
      username,
      password,
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
          <label htmlFor="username" className="label username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="johnd"
            defaultValue="johnd"
            className={`Login-input ${error ? "error" : ""}`}
          />

          <label htmlFor="password" className="label password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            defaultValue="m38rmF$"
            className={`Login-input ${error ? "error" : ""}`}
          />
          {error && <span className="error-message">{error.message}</span>}
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
