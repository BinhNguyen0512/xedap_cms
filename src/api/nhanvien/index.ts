import { AddNhanVienFormType } from "../../types/nhanvien";
import axiosClient from "..";

export const NhanVienService = {
  createNhanVien: (formData: AddNhanVienFormType) =>
    axiosClient.post("/nhanvien", formData),
  updateNhanVien: (manv: string, formData: AddNhanVienFormType) =>
    axiosClient.put(`/nhanvien/${manv}`, formData),
  getAllNhanVien: () => axiosClient.get("/nhanvien"),
  getDetailNhanVien: (manv: string) => axiosClient.get(`/nhanvien/${manv}`),
  deleteNhanVien: (manv: string) => axiosClient.delete(`/nhanvien/${manv}`),
};
