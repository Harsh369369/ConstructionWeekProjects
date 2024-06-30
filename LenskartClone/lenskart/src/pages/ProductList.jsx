import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Flex, Text, Image, Box, Radio } from "@chakra-ui/react";
import ProductView from "../components/ProductView";
import Nav from "../components/Nav";

function ProductList() {
  const location = useLocation();
  const { products, productListType } = location.state || { products: [], productListType: '' };
    const modifiedText = productListType ? productListType.replace('-', ' ').toUpperCase() : '';
  return (
    <>
      <Nav />
      <Image
        src="https://static5.lenskart.com/media/uploads/plp-jj-sun-desk.png"
        paddingX={"2rem"}
        marginTop={'170px'}
      />

      <Flex paddingX={"2rem"} textAlign={"left"}>
        <Box width={"23%"}>
          <Text marginY={"10px"}>FRAME TYPE</Text>
          <Flex gap={"5px"}>
            <Box border={"1px solid black"} padding={"5px"}>
              <Image src="https://static.lenskart.com/images/cust_mailer/Sunglass/FullRim.png" />
              <Text>Full Rim</Text>
            </Box>
            <Box border={"1px solid black"} padding={"5px"}>
              <Image src="https://static.lenskart.com/images/cust_mailer/Sunglass/FullRim.png" />
              <Text>Rimless</Text>
            </Box>
            <Box border={"1px solid black"} padding={"5px"}>
              <Image src="https://static.lenskart.com/images/cust_mailer/Sunglass/FullRim.png" />
              <Text>Half Rim</Text>
            </Box>
          </Flex>
          <Text marginY={"10px"}>FRAME SHAPE</Text>
          <Flex gap={"5px"}>
            <Box border={"1px solid black"} padding={"5px"}>
              <Image src="https://static.lenskart.com/images/cust_mailer/Sunglass/FullRim.png" />
              <Text>Full Rim</Text>
            </Box>
            <Box border={"1px solid black"} padding={"5px"}>
              <Image src="https://static.lenskart.com/images/cust_mailer/Sunglass/FullRim.png" />
              <Text>Rimless</Text>
            </Box>
            <Box border={"1px solid black"} padding={"5px"}>
              <Image src="https://static.lenskart.com/images/cust_mailer/Sunglass/FullRim.png" />
              <Text>Half Rim</Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor={"#ededed"}
            padding={"10px"}
            justifyContent={"space-between"}
          >
            <Text>{modifiedText}</Text>
            <Text>View 3D Try On</Text>
          </Flex>
          <Grid
            templateColumns={"repeat(3, 1fr)"}
            gap={"20px"}
            maxWidth={"1200px"}
            margin={"auto"}
            borderLeft={"1px solid lightgrey"}
            paddingLeft={"30px"}
            paddingTop={'20px'}
          >
            {products.map((product) => (
              <ProductView
                key={product.id}
                id={product.id}
                title={product.title}
                size={product.size}
                series={product.series}
                color={product.color}
                images={product.images}
                price={product.price}
                discount={product.discount}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default ProductList;
