import { API } from "../../port";

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
