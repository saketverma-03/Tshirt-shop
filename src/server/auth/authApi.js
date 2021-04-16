import { API } from "../../port";
// NOTE: signout is in ./authlogic.js

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

