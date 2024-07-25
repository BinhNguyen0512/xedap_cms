import { LoginFormType } from "../../pages/LoginPage";
import axiosClient from "..";

export const AuthService = {
  signInWithCredentials: (formData: LoginFormType) =>
    axiosClient.post("/login", formData),
  getDetailTaiKhoan: (username: string) =>
    axiosClient.get(`/taikhoan/${username}`),
  changePassword: (formData: LoginFormType) =>
    axiosClient.put(`/change-password`, formData),
};
