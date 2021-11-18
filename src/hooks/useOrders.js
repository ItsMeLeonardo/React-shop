import { useEffect, useState } from "react";
import useProducts from "@hooks/useProducts";
import getOrders from "@services/getOrders";

const getTotalQuantity = (products) => {
  return products.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );
};

const getTotalPrice = (products, totalProducts) => {
  const productsFiltered = products?.map((product) => {
    return totalProducts.find(
      (totalProduct) => totalProduct.id === product.productId
    );
  });
  return productsFiltered.reduce((accumulator, product, index) => {
    return accumulator + product.price * products[index].quantity;
  }, 0);
};

const formatDataOfOrders = (orders, totalProducts) => {
  return orders.map((order) => {
    const totalPrice = getTotalPrice(order.products, totalProducts);
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
  const { products, loading } = useProducts();

  if (!idUser) {
    throw new Error("Id user is required");
  }

  useEffect(() => {
    if (loading) {
      getOrders(idUser).then((dataOrders) => {
        setOrders(formatDataOfOrders(dataOrders, products));
      });
    }
  }, [products]);

  return { orders };
}
