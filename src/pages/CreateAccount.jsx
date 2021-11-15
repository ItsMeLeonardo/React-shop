import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import "@styles/CreateAccount.scss";

const VALIDATION = {
  name: {
    required: true,
    maxLength: 20,
  },
  email: {
    required: true,
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
  },
  password: {
    required: true,
    minLength: 8,
  },
};

const NAME_ERROR_MSG = {
  required: "Name is required",
  maxLength: "Name is too long",
};

const CreateAccount = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setTimeout(() => {
    //   history.push("/send-email");
    // }, 4000);
  };

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            {errors.name && (
              <span className="error-message">
                {NAME_ERROR_MSG[errors.name?.type]}
              </span>
            )}
            <input
              type="text"
              id="name"
              placeholder="Your name here"
              className={`input input-name ${errors.name ? "error" : ""}`}
              {...register("name", VALIDATION.name)}
            />

            <label htmlFor="email" className="label">
              Email
            </label>
            {errors.email && (
              <span className="error-message">Please enter a valid email</span>
            )}
            <input
              type="email"
              id="email"
              className={`input input-email ${errors.email ? "error" : ""}`}
              placeholder="platzi@example.com"
              {...register("email", VALIDATION.email)}
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            {errors.password && (
              <span className="error-message">Password is too sort</span>
            )}
            <input
              type="password"
              id="password"
              placeholder="*********"
              className={`input input-password ${
                errors.password ? "error" : ""
              }`}
              {...register("password", VALIDATION.password)}
            />
          </div>

          <button type="submit" className="primary-button login-button">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
