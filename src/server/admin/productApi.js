import { API } from "../../port";


// Products Call
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

// Get all Products
export const getProducts = () =>
  fetch(`${API}/products`)
    .then((res) => res.json())
    .catch((e) => console.log(e));

// get a product
export const getProduct = (productId) =>
  fetch(`${API}/product/${productId}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));

// Update Product
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

// Delete Product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};