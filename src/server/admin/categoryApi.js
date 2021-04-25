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
    .catch((e) => {
      throw e;
    });
};

// GET all categories
export const getCategorys = () =>
  fetch(`${API}/categorys/getAllCategorys`)
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });

// Update Category
export const updateCategory = (categoryId, userId, token, name) =>
  fetch(`${API}/category/updateCategory/${categoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: name }),
  })
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });

// Delete Category
export const deleteCategory = (categoryId, userId, token) =>
  // category/removeCategory/:categoryId/:userId
  fetch(`${API}/category/removeCategory/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
