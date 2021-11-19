import React, { useState } from "react";

const OrdersContext = React.createContext();

function OrdersContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersContextProvider };
