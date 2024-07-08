import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { InputCustom } from "../../components/form/InputCustom";
import { InputPasswordCustom } from "../../components/form/InputPasswordCustom";

export interface LoginFormType {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập username"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <Box width={"100%"} height={"100vh"}>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={10}
        direction={"column"}
      >
        <Text fontSize={"48px"} fontWeight={700}>
          Login
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction={"column"} gap={5} minWidth={"360px"}>
            <Box>
              <InputCustom
                control={control}
                name="username"
                label="Tên tài khoản"
                errors={errors}
                isRequired
              />
            </Box>
            <Box>
              <InputPasswordCustom
                control={control}
                name="password"
                label="Mật khẩu"
                errors={errors}
                isRequired
              />
            </Box>
            <Button
              colorScheme="blue"
              mt={"24px"}
              w={"100%"}
              h={"48px"}
              type="submit"
            >
              Đăng nhập
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default LoginPage;
