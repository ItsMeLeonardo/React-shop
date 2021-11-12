const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);
  const products = await response.json();
  return products;
};
