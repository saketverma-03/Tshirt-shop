import { API } from "../../server";
// API = backend link temperory from env

// other infile exports
export { default as AdminRoute } from "./AdminRoutes";
export { default as PrivateRoute } from "./PrivateRoutes";

// return a user Object
export const signup = (user) => {
  console.log("Here=::", JSON.stringify(user));
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));
};

// return a user Object
export const signin = (user) =>
  fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((responser) => responser.json())
    .catch((e) => console.error(e));

// set takes data i.e barrer token and save it as jwt token if user is not authanticated
export const authanticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next(data);
  }
};

//as it says signouts the user
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/signout`, {
      method: "Get",
    })
      .then((res) => console.log("Loged out succesfully"))
      .catch((e) => console.log(e));
  }
};

// real time authantication checker method
export const isAuthanticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  }
  return false;
};
