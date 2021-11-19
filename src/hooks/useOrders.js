import { useEffect, useState, useContext } from "react";
import useProducts from "@hooks/useProducts";
import getOrders from "@services/getOrders";
import { OrdersContext } from "@context/OrdersContext";

import "@styles/Checkout.scss";

/**
 *
 * @param {Array} products array of products within the orders
 * @returns {Number} the total quantity of products
 */
const getTotalQuantity = (products) => {
  return products.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );
};

/**
 *
 * @param {Array} productsOrder from the orders
 * @param {Array} totalProducts total products from API
 * @returns {Object} with added the complete info of the products and quantity, and total price of order
 */
const completeProductDataFromOrder = (productsOrder, totalProducts) => {
  // complete information about the products in the order
  const productsFiltered = productsOrder?.map((product) => {
    const filtered = totalProducts?.find(
      (totalProduct) => totalProduct?.id === product?.productId
    );
    return { ...filtered, quantity: product?.quantity };
  });

  // calculate the total price of the order
  const totalPrice = productsFiltered.reduce((accumulator, product, index) => {
    return accumulator + product?.price * productsOrder[index]?.quantity;
  }, 0);

  const quantity = getTotalQuantity(productsOrder);

  return {
    totalPrice,
    productsData: productsFiltered,
    quantity,
  };
};

/**
 *
 * @param {Array} orders the orders from API
 * @param {Array} totalProducts the products with info from API
 * @returns {Object} add quantity and price to each order
 */
const formatDataOfOrders = (orders, totalProducts) => {
  return orders.map((order) => {
    const totalPriceAndData = completeProductDataFromOrder(
      order?.products,
      totalProducts
    );
    return {
      ...order,
      ...totalPriceAndData,
    };
  });
};

export default function useOrders({ userId }) {
  const { orders, setOrders } = useContext(OrdersContext);
  const { products } = useProducts();

  if (!userId) {
    throw new Error("Id user is required");
  }

  useEffect(() => {
    // FIXME: add throttle here
    getOrders(userId).then((dataOrders) => {
      setOrders(formatDataOfOrders(dataOrders, products));
    });
  }, [products]);

  return { orders };
}
