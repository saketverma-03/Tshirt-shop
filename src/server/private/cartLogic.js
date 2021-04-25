export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({ ...item });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const removeItem = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let tempCart = cart.filter((product) => product._id !== item._id);
    console.log(item._id)
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    next();
  }
};

export const emptyCart = (next) => {
  let cart = [];
  if (typeof window !== undefined) {
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
