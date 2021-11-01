import React, { useRef } from "react";
import "@styles/Login.scss";

const Login = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fromData = new FormData(formRef.current);
    const data = {
      email: fromData.get("email"),
      password: fromData.get("password"),
    };

    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
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
