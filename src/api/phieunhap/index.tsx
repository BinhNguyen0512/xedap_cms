import { PhieuNhapFormType } from "../../types/phieunhap";
import axiosClient from "..";

export const PhieuNhapService = {
  createPhieuNhap: (formData: PhieuNhapFormType) =>
    axiosClient.post("/phieunhap", formData),
  getAllPhieuNhap: () => axiosClient.get("/phieunhap"),
  //   getDetailCTDDH: (maddh: string) =>
  //     axiosClient.get(`phieunhap/chitiet/${maddh}`),
};
