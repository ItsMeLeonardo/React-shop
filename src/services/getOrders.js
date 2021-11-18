const API_URL = "https://fakestoreapi.com/carts/user";

export default async function getOrders(userId) {
  const response = await fetch(`${API_URL}/${userId}`);
  const ordersData = await response.json();
  return ordersData;
}
