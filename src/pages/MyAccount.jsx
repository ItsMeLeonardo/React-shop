import React, { useState } from "react";
import useUserInfo from "@hooks/useUserInfo";

import "@styles/MyAccount.scss";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [readOnly, setReadOnly] = useState(true);
  const { user } = useUserInfo();

  const handleClick = (event) => {
    event.preventDefault();
    setReadOnly(!readOnly);
  };

  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form onSubmit={handleClick} action="/" className="form">
          <div>
            <label forhtml="name" className="label">
              <span>Name</span>
              <input
                type="text"
                placeholder={`${user.name.firstname} ${user.name.lastname}`}
                className="value"
                readOnly={readOnly}
              ></input>
            </label>

            <label forhtml="email" className="label">
              <span>Email</span>
              <input
                type="email"
                className="value"
                placeholder={user.email}
                readOnly={readOnly}
              />
            </label>

            <label forhtml="password" className="label">
              <span>Password</span>
              <input
                type="password"
                className="value"
                value="*********"
                readOnly
              />
              {!readOnly && (
                <Link to="/new-password" className="icon-input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-input"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </Link>
              )}
            </label>
          </div>
          <input
            type="submit"
            value={readOnly ? "Edit" : "Save"}
            className="secondary-button login-button"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
