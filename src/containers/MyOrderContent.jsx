import React from "react";

export default function MyOrderContent({ children }) {
  return (
    <div className="my-order-content">
      <div class="order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
      </div>
      {children}
    </div>
  );
}
