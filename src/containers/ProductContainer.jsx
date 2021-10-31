import React from "react";

export default function ProductContainer({ children }) {
  return (
    <section className="main-container">
      <div className="cards-container">
        <h1 class="title">My order</h1>
        {children}
      </div>
    </section>
  );
}
