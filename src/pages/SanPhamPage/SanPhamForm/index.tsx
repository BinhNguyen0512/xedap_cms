import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { InputCustom } from "../../../components/form/InputCustom";
import {
  OptionSelect,
  SelectCustom,
} from "../../../components/form/SelectCustom";
import { useAppDispatch, useAppSelector } from "../../../hooks/app-hook";
import { selectListDanhMuc } from "../../../stores/danhmuc";
import { getListDanhMuc } from "../../../stores/danhmuc/danhmuc.thunk";
import { selectListNCC } from "../../../stores/nhacungcap";
import { getListNCC } from "../../../stores/nhacungcap/nhacungcap.thunk";
import { selectListThuongHieu } from "../../../stores/thuonghieu";
import { getListThuongHieu } from "../../../stores/thuonghieu/thuonghieu.thunk";
import { AddSanPhamFormType } from "../../../types/sanpham";

interface Props {
  onSubmit: (data: AddSanPhamFormType) => void;
  handleSubmit: UseFormHandleSubmit<AddSanPhamFormType, undefined>;
  control: Control<AddSanPhamFormType, any>;
  errors: FieldErrors<AddSanPhamFormType>;
  titleButton: string;
  isEdit?: boolean;
  setValue: UseFormSetValue<AddSanPhamFormType>;
  register: UseFormRegister<AddSanPhamFormType>;
  isLoading?: boolean;
}

export const SanPhamForm = (props: Props) => {
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    titleButton,
    isEdit = false,
    register,
    setValue,
    isLoading,
  } = props;

  const listTH = useAppSelector(selectListThuongHieu);
  const listDM = useAppSelector(selectListDanhMuc);
  const listNCC = useAppSelector(selectListNCC);
  const dispatch = useAppDispatch();

  const [listOptionTH, setListOptionTH] = useState<OptionSelect[]>([]);
  const [listOptionDM, setListOptionDM] = useState<OptionSelect[]>([]);
  const [listOptionNCC, setListOptionNCC] = useState<OptionSelect[]>([]);

  useEffect(() => {
    dispatch(getListThuongHieu());
    dispatch(getListDanhMuc());
    dispatch(getListNCC());
  }, []);

  useEffect(() => {
    const listOption = listTH.map((th) => {
      return {
        value: th.math,
        label: th.tenth,
      };
    });

    setListOptionTH(listOption);
    listOption.length > 0 && setValue("math", listOption[0].value);
  }, [listTH]);

  useEffect(() => {
    const listOption = listDM.map((dm) => {
      return {
        value: dm.madm,
        label: dm.tendm,
      };
    });

    setListOptionDM(listOption);
    listOption.length > 0 && setValue("madm", listOption[0].value);
  }, [listDM]);

  useEffect(() => {
    const listOption = listNCC.map((ncc) => {
      return {
        value: ncc.mancc,
        label: ncc.tenncc,
      };
    });

    setListOptionNCC(listOption);
    listOption.length > 0 && setValue("mancc", listOption[0].value);
  }, [listNCC]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex mt="20" w={"100%"} justifyContent={"center"}>
        <Flex w={"360px"} direction={"column"} gap={10}>
          <InputCustom
            control={control}
            name="masp"
            label="Mã sản phẩm"
            errors={errors}
            isRequired
            disabled={isEdit}
          />

          <InputCustom
            control={control}
            name="tensp"
            label="Tên sản phẩm"
            errors={errors}
            isRequired
            disabled={isEdit}
          />

          <InputCustom
            control={control}
            name="soluong"
            label="Số lượng"
            errors={errors}
            isRequired
            disabled={isEdit}
          />

          <InputCustom
            control={control}
            name="dongia"
            label="Đon giá"
            errors={errors}
            isRequired
            disabled={isEdit}
          />

          <InputCustom
            control={control}
            name="chitietSP"
            label="Chi tiết sản phẩm"
            errors={errors}
            isRequired
            disabled={isEdit}
          />

          <FormControl isRequired isInvalid={!!errors["image"]}>
            <FormLabel mb={"4px"}>Hình 1</FormLabel>

            <input type="file" {...register("image")} />

            <FormErrorMessage mt={"4px"}>
              {!!errors["image"] && (
                <Text>{errors["image"]?.message as string}</Text>
              )}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors["image2"]}>
            <FormLabel mb={"4px"}>Hình 2</FormLabel>

            <input type="file" {...register("image2")} />

            <FormErrorMessage mt={"4px"}>
              {!!errors["image2"] && (
                <Text>{errors["image2"]?.message as string}</Text>
              )}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors["image3"]}>
            <FormLabel mb={"4px"}>Hình 3</FormLabel>

            <input type="file" {...register("image3")} />

            <FormErrorMessage mt={"4px"}>
              {!!errors["image3"] && (
                <Text>{errors["image3"]?.message as string}</Text>
              )}
            </FormErrorMessage>
          </FormControl>

          <SelectCustom
            control={control}
            errors={errors}
            name="madm"
            label="Danh mục"
            listOption={listOptionDM}
            isRequired
          />

          <SelectCustom
            control={control}
            errors={errors}
            label="Thương hiệu"
            name="math"
            listOption={listOptionTH}
            isRequired
          />

          <SelectCustom
            control={control}
            errors={errors}
            name="mancc"
            isRequired
            label="Nhà cung cấp"
            listOption={listOptionNCC}
          />

          <Button
            colorScheme="blue"
            mt={"24px"}
            w={"100%"}
            h={"48px"}
            type="submit"
            isLoading={isLoading}
          >
            {titleButton}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
