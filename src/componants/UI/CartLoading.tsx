import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

interface IProps {}

const CartLoading = ({}: IProps) => {
  return (
    <Box padding="6" boxShadow="lg" bg="gray.800" rounded="lg">
      <SkeletonCircle size="10" mx="auto" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" />

      <Flex justifyContent="space-between" mt="4">
        <SkeletonText noOfLines={1} spacing="4" w="20" />
        <SkeletonText noOfLines={1} spacing="4" w="20" />
      </Flex>

      <SkeletonText mt="4" w="32" noOfLines={1} spacing="4" />
      <SkeletonText mt="4" w="32" noOfLines={1} spacing="4" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" />
    </Box>
  );
};

export default CartLoading;
