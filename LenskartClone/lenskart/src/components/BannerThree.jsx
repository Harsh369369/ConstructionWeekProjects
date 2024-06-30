import React from "react";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import DividerHeading from "./DividerHeading";

function BannerThree({ title }) {
  return (
    <Box>
      <DividerHeading title={title}></DividerHeading>
      <Flex
        gap={4}
        maxWidth={"1080px"}
        margin={"auto"}
      >
        <Box>
          <Image src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg"></Image>
        </Box>
        <Box>
          <Image src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"></Image>
        </Box>
      </Flex>
    </Box>
  );
}

export default BannerThree;
