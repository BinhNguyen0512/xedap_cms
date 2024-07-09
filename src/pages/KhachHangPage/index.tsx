import {
  Box,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../../components/ui/Loading";
import { PageWrapper } from "../../components/ui/PageWrapper";
import { TitlePage } from "../../components/ui/TitlePage";
import { useAppDispatch, useAppSelector } from "../../hooks/app-hook";
import { selectIsLoading, selectListKH } from "../../stores/khachhang";
import { getListKH } from "../../stores/khachhang/khachhang.thunk";
import { KhachHangType } from "../../types/khachhang";

const KhachHangPage = () => {
  const listKH = useAppSelector(selectListKH);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListKH());
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <Loading />;
    }

    return (
      <Box
        width={"100%"}
        height={"100%"}
        border={"1px solid #e2e8f0"}
        borderRadius={"8px"}
        p="8px"
      >
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <TableCaption>Danh sách khách hàng trong hệ thống</TableCaption>
            <Thead>
              <Tr>
                <Th>Mã khách hàng</Th>
                <Th>Username</Th>
                <Th>Họ tên</Th>
                <Th>Giới tính</Th>
                <Th>Email</Th>
                <Th>SĐT</Th>
                <Th>Địa chỉ</Th>
              </Tr>
            </Thead>
            <Tbody>
              {listKH.map((khachhang: KhachHangType) => (
                <Tr key={khachhang.makh}>
                  <Td>{khachhang.makh}</Td>
                  <Td>{khachhang.taikhoan.username}</Td>
                  <Td>{khachhang.hoTen}</Td>
                  <Td>{khachhang.gioiTinh}</Td>
                  <Td>{khachhang.email}</Td>
                  <Td>{khachhang.sdt}</Td>
                  <Td>{khachhang.diaChi}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  return (
    <PageWrapper>
      <Flex direction={"column"} gap={10}>
        <TitlePage
          titleButtonCreate="Thêm nhân viên"
          title={"Danh sách nhân viên"}
          onClickCreate={() => {
            navigate("/admin/khachhang/create");
          }}
        />

        {renderData()}
      </Flex>
    </PageWrapper>
  );
};

export default KhachHangPage;
