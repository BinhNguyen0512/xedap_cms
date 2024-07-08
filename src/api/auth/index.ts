import { LoginFormType } from "../../pages/LoginPage";
import axiosClient from "..";

export const AuthService = {
  signInWithCredentials: (formData: LoginFormType) =>
    axiosClient.post("/login", formData),
};
