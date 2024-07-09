import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import danhmucReducer from "./danhmuc";

const rootReducers = {
  auth: authReducer,
  danhmuc: danhmucReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
