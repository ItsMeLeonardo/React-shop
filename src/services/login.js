const ENDPOINT = "https://fakestoreapi.com/auth/login";

export default async function login(username, password) {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (data.msg === "username or password is incorrect") {
      throw new Error("username or password is incorrect");
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
