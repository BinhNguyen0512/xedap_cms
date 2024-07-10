import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import danhmucReducer from "./danhmuc";
import khachhangReducer from "./khachhang";
import nhacungcapReducer from "./nhacungcap";
import nhanvienReducer from "./nhanvien";
import sanphamReducer from "./sanpham";
import thuonghieuReducer from "./thuonghieu";

const rootReducers = {
  auth: authReducer,
  danhmuc: danhmucReducer,
  thuonghieu: thuonghieuReducer,
  nhacungcap: nhacungcapReducer,
  nhanvien: nhanvienReducer,
  khachhang: khachhangReducer,
  sanpham: sanphamReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
