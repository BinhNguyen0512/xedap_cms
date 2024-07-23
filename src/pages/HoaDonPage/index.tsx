import {
  Box,
  Button,
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
import Roboto300Font from "@fontsource/roboto/files/roboto-vietnamese-300-normal.woff";
import Roboto400Font from "@fontsource/roboto/files/roboto-vietnamese-400-normal.woff";
import Roboto700Font from "@fontsource/roboto/files/roboto-vietnamese-700-normal.woff";
import {
  Document,
  Page,
  PDFDownloadLink,
  Text,
  View,
} from "@react-pdf/renderer";
import { Font, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";
import { useEffect } from "react";

import { Loading } from "../../components/ui/Loading";
import { PageWrapper } from "../../components/ui/PageWrapper";
import { TitlePage } from "../../components/ui/TitlePage";
import { ConvertPrice } from "../../helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/app-hook";
import { selectIsLoading, selectListHoaDon } from "../../stores/hoadon";
import { getListHoaDon } from "../../stores/hoadon/hoadon.thunk";
import { HoaDonType } from "../../types/hoadon";

Font.register({
  family: "Roboto",
  fonts: [
    {
      fontWeight: 400,
      src: Roboto400Font,
    },
    {
      fontWeight: 300,
      src: Roboto300Font,
    },
    {
      fontWeight: 700,
      src: Roboto700Font,
    },
  ],
});

const HoaDonPage = () => {
  const dispatch = useAppDispatch();
  const listHoaDon = useAppSelector(selectListHoaDon);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getListHoaDon());
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
            <TableCaption>Danh sách Hoá đơn trong hệ thống</TableCaption>
            <Thead>
              <Tr>
                <Th>Mã HĐơn</Th>
                <Th>Ngày lập</Th>
                <Th>Thành tiền</Th>
                <Th>Mã ĐHàng</Th>
                <Th>Họ tên</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {listHoaDon.map((hoadon: HoaDonType, index) => (
                <Tr key={index}>
                  <Td>{hoadon.mahd}</Td>
                  <Td>{moment(hoadon.ngaylap).format("DD-MM-YYYY")}</Td>
                  <Td>{ConvertPrice(hoadon.thanhtien)}</Td>
                  <Td>{hoadon.donhang.madh}</Td>
                  <Td>{hoadon.donhang.khachhang.hoTen}</Td>
                  <Td>{hoadon.donhang.khachhang.email}</Td>
                  <Td>
                    <PDFDownloadLink
                      document={<MyDocument />}
                      fileName="hoadon.pdf"
                    >
                      <Button
                        color={"#5998e3"}
                        _hover={{
                          background: "transparent",
                        }}
                      >
                        Xuất hoá đơn
                      </Button>
                    </PDFDownloadLink>
                  </Td>
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
        <TitlePage title={"Danh sách Hoá đơn"} isShowButtonCreate={false} />

        {renderData()}
      </Flex>
    </PageWrapper>
  );
};

export default HoaDonPage;

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
  },
});

const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Hóa Đơn Bán Hàng</Text>
        <Text style={styles.text}>Ngày: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.text}>Tên khách hàng: John Doe</Text>
        <Text style={styles.text}>Sản phẩm: Xe đạp ABC</Text>
        <Text style={styles.text}>Số lượng: 1</Text>
        <Text style={styles.text}>Đơn giá: 10.000.000 VND</Text>
        <Text style={styles.text}>Tổng cộng: 10.000.000 VND</Text>
      </View>
    </Page>
  </Document>
);
