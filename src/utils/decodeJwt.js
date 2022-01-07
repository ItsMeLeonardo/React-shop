import jwt_decode from "jwt-decode";

export const decodeJwt = (token) => {
  if (!token) return null;
  try {
    return jwt_decode(token);
  } catch (err) {
    return null;
  }
};
