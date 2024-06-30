import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import DividerHeading from "./DividerHeading";

function BannerTwo({ title, images }) {
  return (
    <Box>
      <DividerHeading title={title}></DividerHeading>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        maxWidth={"1080px"}
        margin={"auto"}
      >
        <GridItem colSpan={1} rowStart={1} rowEnd={3}>
          <Image src={images[0]}></Image>
        </GridItem>
        <GridItem rowStart={1} rowEnd={2}>
          <Image src={images[1]}></Image>
        </GridItem>
        <GridItem rowStart={2} rowEnd={3}>
          <Image src={images[2]}></Image>
        </GridItem>
        <GridItem rowStart={3} rowEnd={4}>
          <Image src={images[3]}></Image>
        </GridItem>
        <GridItem rowStart={3} rowEnd={4}>
          <Image src={images[4]}></Image>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BannerTwo;
