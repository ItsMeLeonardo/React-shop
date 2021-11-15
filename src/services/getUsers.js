const API_URL = "https://fakestoreapi.com/users";

export default async function getUsers() {
  const response = await fetch(API_URL);
  const users = await response.json();
  return users;
}
