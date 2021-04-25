import { API } from "../../port";

// Get all Product For user
export const getProduct = () =>
  fetch(`${API}/ptoduct/getAllProducts`)
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });

// Get All categorys fro the user
// Note:: same api exists for admin also
export const getCategorys = () =>
  fetch(`${API}/product/getAllCategory`)
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
