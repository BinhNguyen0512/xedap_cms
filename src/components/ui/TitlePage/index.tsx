import { Flex, Text } from "@chakra-ui/react";

import { ButtonCreate } from "../ButtonCreate";

interface Props {
  title: string;
  onClickCreate?: () => void;
  isShowButtonCreate?: boolean;
}

export const TitlePage = (props: Props) => {
  const {
    title,
    onClickCreate = () => console.log,
    isShowButtonCreate = true,
  } = props;
  return (
    <Flex direction={"column"} gap={10}>
      <Text fontWeight={700} fontSize={24}>
        {title}
      </Text>
      {isShowButtonCreate && <ButtonCreate onClick={onClickCreate} />}
    </Flex>
  );
};
