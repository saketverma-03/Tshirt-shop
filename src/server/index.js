// Authantication
export { signup, signin } from "./auth/authApi";
export { signout, authanticate, isAuthanticated } from "./auth/authLogic";

// Protected Routes
export { default as AdminRoute } from "./Routes/AdminRoutes";
export { default as PrivateRoute } from "./Routes/PrivateRoutes";

//Admin only apis
export {
  createCategory,
  getCategorys,
  updateCategory,
  deleteCategory,
} from "./admin/categoryApi";

export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./admin/productApi";

// Public Apis
export { getProduct, getCategorys as getAllCategory } from "./public/product";

// Private
export { addItemToCart, removeItem, emptyCart } from "./private/cartLogic";
