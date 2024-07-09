import { createSlice } from "@reduxjs/toolkit";

import { ApplicationRootState } from "../../types";
import { NhanVienType } from "../../types/nhanvien";
import extraReducers from "./nhanvien.extraReducers";

export interface NhanVienStateType {
  listNV: NhanVienType[];
  isLoading: boolean;
}

const initialState: NhanVienStateType = {
  listNV: [],
  isLoading: false,
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

export default nhanvienSlice.reducer;
