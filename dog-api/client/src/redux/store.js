import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import DogReducer from "./features/dogSlice";

export default configureStore({
    reducer: {
      auth: AuthReducer,
      dog: DogReducer,
    },
  });