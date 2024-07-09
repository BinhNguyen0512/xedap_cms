import { Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { PageWrapper } from "../../components/ui/PageWrapper";
import { TitlePage } from "../../components/ui/TitlePage";

const DanhMucPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Flex direction={"column"} gap={10}>
        <TitlePage
          title={"Danh mục sản phẩm"}
          onClickCreate={() => {
            navigate("/admin/danhmuc/create");
          }}
        />

        <Box>Show table</Box>
      </Flex>
    </PageWrapper>
  );
};

export default DanhMucPage;
