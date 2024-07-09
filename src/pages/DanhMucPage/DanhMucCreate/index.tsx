import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { DanhMucService } from "../../../api/danhmuc";
import { PageWrapper } from "../../../components/ui/PageWrapper";
import { TitlePage } from "../../../components/ui/TitlePage";
import { useToastCustom } from "../../../hooks/useToastCustom";
import { DanhMucFormType } from "../../../types/danhmuc";
import { DanhMucForm } from "../DanhMucForm";
import { validationDanhMuc } from "../ValidationDanhMuc";

export const DanhMucCreate = () => {
  const toast = useToastCustom();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<DanhMucFormType>({
    mode: "onChange",
    resolver: yupResolver(validationDanhMuc),
    defaultValues: {
      madm: "",
      tendm: "",
    },
  });

  const onSubmit = async (data: DanhMucFormType) => {
    try {
      const response = await DanhMucService.createDanhMuc(data);

      toast({
        title: "Tạo danh mục",
        description: response.data,
        status: "success",
      });
      reset();
    } catch (error) {
      toast({
        title: "Tạo danh mục",
        description: (error as any).response.data,
        status: "error",
      });
    }
  };

  return (
    <PageWrapper>
      <TitlePage
        linkReturn={"/admin/danhmuc"}
        isShowButtonCreate={false}
        title="Tạo danh mục"
      />

      <DanhMucForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        titleButton="Tạo danh mục"
      />
    </PageWrapper>
  );
};
