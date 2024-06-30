import React from "react";
import { Box, Divider, Flex, Text, Heading } from "@chakra-ui/react";
import ProductSlider from "./ProductSlider";

const ProductHeading = ({ title }) => {
  return (
      <Flex justifyContent={"space-between"} alignItems={"end"}>
        <Box>
            WEAR THE 
            <Heading as={'h4'}>TREND</Heading>
            <Text>Our Hottest Collections</Text>
        </Box>
        <ProductSlider isLoop={true} hasHeading={false}></ProductSlider>
      </Flex>
  );
};

export default ProductHeading;
