import { Box, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";

interface SidebarType {
  link: string;
  name: string;
  id: string;
}

const listSidebar: SidebarType[] = [
  {
    link: "/admin/danhmuc",
    name: "Danh sách danh mục",
    id: "danh-sach-danh-muc",
  },
  {
    link: "/admin/nhacungcap",
    name: "Nhà cung cấp",
    id: "danh-sach-nha-cung-cap",
  },
  {
    link: "/admin/thuonghieu",
    name: "Danh sách thương hiệu",
    id: "danh-sach-thuong-hieu",
  },
  {
    link: "/admin/khachhang",
    name: "Danh sách khách hàng",
    id: "danh-sach-khachhang",
  },
  {
    link: "/admin/nhanvien",
    name: "Danh sách nhân viên",
    id: "danh-sach-nhan-vien",
  },
  {
    link: "/admin/sanpham",
    name: "Danh sách sản phẩm",
    id: "danh-sach-san-pham",
  },
  {
    link: "/admin/donhanguser",
    name: "Danh sách đơn hàng",
    id: "danh-sach-don-hang",
  },
];

export const DefaultLayout = () => {
  return (
    <>
      <Header />

      <Flex gap={20}>
        <Box
          width={"280px"}
          height={"150vh"}
          backgroundColor={"#2e3836"}
          p={"32px 12px"}
        >
          <Flex direction={"column"} gap={20}>
            <Box>Avatart</Box>
            <Flex direction={"column"} gap={10}>
              {listSidebar.map((sidebar) => (
                <Link
                  key={sidebar.id}
                  href={sidebar.link}
                  _hover={{
                    transition: "all 0.3s ease",
                    scale: 1.5,
                  }}
                  color={"white"}
                  fontWeight={700}
                  fontSize={18}
                >
                  {sidebar.name}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
        <Outlet />
      </Flex>
    </>
  );
};
