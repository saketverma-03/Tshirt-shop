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
    .catch((e) => {
      throw e;
    });
};

// Get all Products
export const getAllProducts = () =>
  fetch(`${API}/ptoduct/getAllProducts`)
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });

// get a product
export const getProduct = (productId) =>
  fetch(`${API}/product/${productId}`)
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });

// Update Product
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/updateProduct/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
};

// Delete Product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/deleteProduct/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
};
