import React from "react";
import { useForm } from "react-hook-form";

import logo from "@logos/logo_yard_sale.svg";
import "@styles/NewPassword.scss";
import { useHistory } from "react-router";

const VALIDATION = {
  password: {
    required: true,
    minLength: 8,
  },
};

const NAME_ERROR_MSG = {
  required: "This field is required",
  minLength: "The length is too short",
};

const NewPassword = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      history.push("/account");
    }, 1500);
  };

  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="NewPassword-form">
          <label forhtml="password" className="label">
            <span>Password</span>
            {errors.password && (
              <span className="error-message">
                {NAME_ERROR_MSG[errors.password?.type]}
              </span>
            )}
            <input
              type="password"
              id="password"
              placeholder="*********"
              className={`input-confirm-password ${
                errors.password ? "error" : ""
              }`}
              {...register("password", VALIDATION.password)}
            />
          </label>

          <label forhtml="new-password" className="label">
            <span>Confirm password</span>
            {errors.passwordConfirmation && (
              <span className="error-message">
                {errors.passwordConfirmation?.message}
              </span>
            )}
            <input
              type="password"
              id="new-password"
              placeholder="*********"
              className={`input-confirm-password ${
                errors.passwordConfirmation ? "error" : ""
              }`}
              {...register("passwordConfirmation", {
                required: "please confirm your password",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords don't match";
                  },
                },
              })}
            />
          </label>

          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
