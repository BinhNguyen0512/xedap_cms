import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/admin/login");
  };
  return (
    <Box w={"100%"} height={"75px"} backgroundColor={"#6e9c92"}>
      <Box height={"100%"} px={{ lg: "60px", xl: "72px" }}>
        <Flex
          height={"100%"}
          justifyContent={"space-between"}
          mx={"0 auto"}
          alignItems={"center"}
        >
          <Flex
            alignItems={"center"}
            height={"100%"}
            color={"white"}
            fontSize={"36px"}
            fontWeight={700}
          >
            Trang quản trị
          </Flex>
          <Button
            background={"transparent"}
            color={"white"}
            fontWeight={700}
            alignItems={"center"}
            _hover={{
              background: "transparent",
            }}
            onClick={handleSignOut}
          >
            Đăng xuất
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
