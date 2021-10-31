import React from "react";
import "../styles/MyOrder.scss";

// need to class 13 + 9

export default function MyOrder({ children }) {
  return (
    <div className="my-order">
      <div className="my-order-container">{children}</div>
    </div>
  );
}
