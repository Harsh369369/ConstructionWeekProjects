import React from "react";
import {
  Box,
  Divider,
  Flex,
  Text,
  Link
} from "@chakra-ui/react";

const ProductHeading = ({title}) => {
  return (
      <Box position="relative" width={'100%'}>
        <Flex justifyContent={"space-between"} alignItems={"end"}>
            <Text fontSize={'25px'} width={"fit-content"}>
            {title}
          </Text>
          <Link color="teal">View Range</Link>
        </Flex>
          
        <Divider color={"black"} width={'100%'} height={'1px'} orientation="horizontal" backgroundColor={"black"}/>
      </Box>
  );
};

export default ProductHeading;
