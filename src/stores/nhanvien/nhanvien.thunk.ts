import { createAsyncThunk } from "@reduxjs/toolkit";

import { NhanVienService } from "../../api/nhanvien";

export const getListNV = createAsyncThunk(
  "nhanvien/getListNV",
  async (_, thunkApi) => {
    try {
      const response = await NhanVienService.getAllNhanVien();

      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
    // eslint-disable-next-line prettier/prettier
  }
);

export const getDetailNVByUsername = createAsyncThunk(
  "nhanvien/getDetailNV",
  async (username: string, thunkApi) => {
    try {
      const response =
        await NhanVienService.getDetailNhanVienByUsername(username);

      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
    // eslint-disable-next-line prettier/prettier
  }
);
