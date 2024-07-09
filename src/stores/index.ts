import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import danhmucReducer from "./danhmuc";
import nhacungcapReducer from "./nhacungcap";
import thuonghieuReducer from "./thuonghieu";

const rootReducers = {
  auth: authReducer,
  danhmuc: danhmucReducer,
  thuonghieu: thuonghieuReducer,
  nhacungcap: nhacungcapReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
