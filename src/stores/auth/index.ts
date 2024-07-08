import { createSlice } from "@reduxjs/toolkit";

interface AuthStateType {
  username: "";
  isLoading: false;
  isAuthenticated: false;
}

export const initialState: AuthStateType = {
  username: "",
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
