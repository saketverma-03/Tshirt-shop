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

// Update Category
export const updateCategory = (categoryId, userId, token, name) =>
  fetch(`${API}/category/updateCategory/${categoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: { name: name },
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));

// Delete Category
export const deleteCategory = (categoryId, userId, token) =>
  fetch(`${API}/category/updateCategory/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));
