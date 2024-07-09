import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ThuongHieuService } from "../../../api/thuonghieu";
import { PageWrapper } from "../../../components/ui/PageWrapper";
import { TitlePage } from "../../../components/ui/TitlePage";
import { useToastCustom } from "../../../hooks/useToastCustom";
import { ThuongHieuFormType } from "../../../types/thuonghieu";
import { ThuongHieuForm } from "../ThuongHieuForm";
import { validationThuongHieu } from "../ValidationThuongHieu";

const ThuongHieuCreate = () => {
  const toast = useToastCustom();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ThuongHieuFormType>({
    mode: "onChange",
    resolver: yupResolver(validationThuongHieu),
    defaultValues: {
      math: "",
      tenth: "",
    },
  });

  const onSubmit = async (data: ThuongHieuFormType) => {
    try {
      const response = await ThuongHieuService.createThuongHieu(data);

      toast({
        title: "Tạo thương hiệu",
        description: response.data,
        status: "success",
      });
      reset();
    } catch (error) {
      toast({
        title: "Tạo thương hiệu",
        description: (error as any).response.data,
        status: "error",
      });
    }
  };

  return (
    <PageWrapper>
      <TitlePage
        linkReturn={"/admin/thuonghieu"}
        isShowButtonCreate={false}
        title="Tạo thương hiệu"
      />

      <ThuongHieuForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        titleButton="Tạo thương hiệu"
      />
    </PageWrapper>
  );
};

export default ThuongHieuCreate;
