import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";

import axiosClient from "../../../api";
import { SanPhamService } from "../../../api/sanpham";
import { PageWrapper } from "../../../components/ui/PageWrapper";
import { TitlePage } from "../../../components/ui/TitlePage";
import { useToastCustom } from "../../../hooks/useToastCustom";
import { AddSanPhamFormType } from "../../../types/sanpham";
import { SanPhamForm } from "../SanPhamForm";
import { validationSanPham } from "../ValidationSanPham";

const SanPhamCreate = () => {
  const toast = useToastCustom();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    register,
  } = useForm<AddSanPhamFormType>({
    mode: "onChange",
    resolver: yupResolver(validationSanPham),
    defaultValues: {
      chitietSP: "",
      dongia: 0,
      madm: "",
      mancc: "",
      masp: "",
      math: "",
      soluong: 0,
      tensp: "",
    },
  });

  const onSubmit = async (data: AddSanPhamFormType) => {
    const formData = new FormData();
    formData.append("file", data.image[0] as string);
    formData.append("upload_preset", "project_xedap");

    const formData2 = new FormData();
    formData2.append("file", data.image2[0] as string);
    formData2.append("upload_preset", "project_xedap");

    const formData3 = new FormData();
    formData3.append("file", data.image3[0] as string);
    formData3.append("upload_preset", "project_xedap");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let image = "";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let image2 = "";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let image3 = "";

    setIsLoading(true);
    if (data.image.length > 0) {
      await axiosClient
        .post(
          "https://api.cloudinary.com/v1_1/dnk2nocdt/image/upload",
          formData,
        )
        .then((response) => {
          image = response.data.url;
        });
    }

    if (data.image2.length > 0) {
      await axiosClient
        .post(
          "https://api.cloudinary.com/v1_1/dnk2nocdt/image/upload",
          formData2,
        )
        .then((response) => {
          image2 = response.data.url;
        });
    }
    if (data.image3.length > 0) {
      await axiosClient
        .post(
          "https://api.cloudinary.com/v1_1/dnk2nocdt/image/upload",
          formData3,
        )
        .then((response) => {
          image3 = response.data.url;
        });
    }

    try {
      const response = await SanPhamService.createSanPham({
        ...data,
        image,
        image2,
        image3,
        slug: slugify(data.tensp || "").toLowerCase(),
      });

      toast({
        title: "Tạo sản phẩm thành công",
        description: response.data,
        status: "success",
      });

      reset();
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Đã xảy ra lỗi, tạo sản phẩm thất bại",
        description: (error as any).response.data,
        status: "error",
      });
    }
  };

  return (
    <PageWrapper>
      <TitlePage
        linkReturn={"/admin/sanpham"}
        isShowButtonCreate={false}
        title="Tạo sản phẩm"
      />

      <SanPhamForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        titleButton="Tạo sản phẩm"
        setValue={setValue}
        register={register}
        isLoading={isLoading}
      />
    </PageWrapper>
  );
};

export default SanPhamCreate;
