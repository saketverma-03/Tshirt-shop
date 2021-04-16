import { API } from "../../port";

// Create a new category
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: category }),
  })
    .then((responser) => responser.json())
    .catch((e) => console.error(e));
};

// GET all categories //TODO:
export const getCategorys = () =>
  fetch(`${API}/categorys`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
