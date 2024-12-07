import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer, // Add the product slice to the store.
  },
});

export default store; // Export the store for other parts of the application to use.
