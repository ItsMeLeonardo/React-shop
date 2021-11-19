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
 * @returns {Number} the total price of the order
 */
const getTotalPrice = (productsOrder, totalProducts) => {
  // complete information about the products in the order
  const productsFiltered = productsOrder?.map((product) => {
    return totalProducts?.find(
      (totalProduct) => totalProduct?.id === product?.productId
    );
  });

  // calculate the total price of the order
  const totalPrice = productsFiltered.reduce((accumulator, product, index) => {
    return accumulator + product?.price * productsOrder[index]?.quantity;
  }, 0);
  return {
    totalPrice,
    productsData: productsFiltered,
  };
};

/* TODO: optimize this function
const getProductData = (productsOrder, totalProducts) => {
  // complete information about the products in the order
  const productsFiltered = productsOrder?.map((product) => {
    return totalProducts?.find(
      (totalProduct) => totalProduct?.id === product?.productId
    );
  });
} */

/**
 *
 * @param {Array} orders the orders from API
 * @param {Array} totalProducts the products with info from API
 * @returns {Object} add quantity and price to each order
 */
const formatDataOfOrders = (orders, totalProducts) => {
  return orders.map((order) => {
    const totalPriceAndData = getTotalPrice(order?.products, totalProducts);
    const quantity = getTotalQuantity(order?.products);
    return {
      ...order,
      quantity,
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
