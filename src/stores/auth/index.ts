import { createSlice } from "@reduxjs/toolkit";

import extraReducers from "./auth.extraReducers";

export interface AuthStateType {
  username: string;
  quyen: 1 | 2 | 3;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const initialState: AuthStateType = {
  username: "",
  quyen: 1,
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers,
});

export const selectUsername = (state: ApplicationRootState) =>
  state.auth.username;

export default authSlice.reducer;
