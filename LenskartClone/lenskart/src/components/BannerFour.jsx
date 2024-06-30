import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import DividerHeading from "./DividerHeading";

function BannerFour({ title }) {
  return (
    <Box>
      <DividerHeading title={title}></DividerHeading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
        maxWidth={"1080px"}
        margin={"auto"}
      >
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/call.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/wts-up.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"></Image>
        </GridItem>
        <GridItem>
          <Image src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"></Image>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BannerFour;
