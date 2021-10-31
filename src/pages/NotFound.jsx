import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <section className="page-content">
      <h1 className="title-404">404</h1>
      <p className="text-404">Oops! Are you missing :c.</p>
      <Link className="button-404" to="/">
        Go to home :D.
      </Link>
    </section>
  );
};

export default NotFound;
