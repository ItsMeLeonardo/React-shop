import React from "react";
import useOrders from "@hooks/useOrders";
import useUserInfo from "@hooks/useUserInfo";
import SaleItem from "@components/SaleItem";
import SaleItemLoader from "@loaders/SaleItemLoader";

import "@styles/Orders.scss";

const Orders = () => {
  const { user } = useUserInfo();
  const { orders, loading } = useOrders({ userId: user?.id });

  if (loading) {
    return (
      <div className="Orders-loader">
        <SaleItemLoader />
      </div>
    );
  }

  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">Total orders</h1>
        <div className="Orders-content">
          {orders?.map(({ id, date, quantity, totalPrice }) => (
            <SaleItem
              key={id}
              id={id}
              date={date}
              articles={quantity}
              total={totalPrice}
              idUser={user?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
