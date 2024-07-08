import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";

const rootReducers = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
