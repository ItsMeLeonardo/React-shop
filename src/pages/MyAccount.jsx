import React from "react";
import "@styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label forhtml="name" className="label">
              Name
            </label>
            <p className="value">Leonardo Cruces</p>
            <label forhtml="email" className="label">
              Email
            </label>
            <p className="value">carlosgamercovi20@gmail.com</p>
            <label forhtml="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
