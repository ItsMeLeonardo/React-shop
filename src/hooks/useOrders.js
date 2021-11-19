import { useEffect, useState } from "react";
import useProducts from "@hooks/useProducts";
import getOrders from "@services/getOrders";

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
  return productsFiltered.reduce((accumulator, product, index) => {
    return accumulator + product?.price * productsOrder[index]?.quantity;
  }, 0);
};

/**
 *
 * @param {Array} orders the orders from API
 * @param {Array} totalProducts the products with info from API
 * @returns {Object} add quantity and price to each order
 */
const formatDataOfOrders = (orders, totalProducts) => {
  return orders.map((order) => {
    const totalPrice = getTotalPrice(order?.products, totalProducts);
    const quantity = getTotalQuantity(order?.products);
    return {
      ...order,
      quantity,
      totalPrice,
    };
  });
};

export default function useOrders({ idUser }) {
  const [orders, setOrders] = useState(null);
  const { products } = useProducts();

  if (!idUser) {
    throw new Error("Id user is required");
  }

  useEffect(() => {
    // FIXME: add throttle here
    getOrders(idUser).then((dataOrders) => {
      setOrders(formatDataOfOrders(dataOrders, products));
    });
  }, [products]);

  return { orders };
}
