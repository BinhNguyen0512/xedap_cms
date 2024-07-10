import { createSlice } from "@reduxjs/toolkit";

import { ApplicationRootState } from "../../types";
import { NhanVienType } from "../../types/nhanvien";
import extraReducers from "./nhanvien.extraReducers";

export interface NhanVienStateType {
  listNV: NhanVienType[];
  isLoading: boolean;
  detailNhanVien: NhanVienType;
}

export const initialNhanVien: NhanVienType = {
  manv: "",
  hoten: "",
  gioitinh: "",
  sdt: "",
  diachi: "",
  email: "",
  luong: 0,
  taikhoan: {
    username: "",
    password: "",
  },
};

const initialState: NhanVienStateType = {
  listNV: [],
  isLoading: false,
  detailNhanVien: initialNhanVien,
};

const nhanvienSlice = createSlice({
  name: "nhanvien",
  initialState,
  reducers: {},
  extraReducers,
});

export const selectListNV = (state: ApplicationRootState) =>
  state.nhanvien.listNV;

export const selectIsLoading = (state: ApplicationRootState) =>
  state.nhanvien.isLoading;

export const selectDetailNV = (state: ApplicationRootState) =>
  state.nhanvien.detailNhanVien;

export default nhanvienSlice.reducer;
