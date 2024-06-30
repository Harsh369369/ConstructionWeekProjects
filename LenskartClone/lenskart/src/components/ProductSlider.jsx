import React, { useState } from "react";
import { Box, Image, IconButton, Flex } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import ProductHeading from "./ProductHeading";

const products = [
  {
    id: 1,
    image:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/pink-transparent-purple-pink-tortoise-full-rim-rectangle-kids--5-8-yrs--hooper-flexi-hooper-hp-e15084m-c3-eyeglasses_pink-transparent-purple-pink-tortoise-full-rim-rectangle-kids-(5-8-yrs)-hooper-flexi-hooper-hp-e15084m-c3-eyeglasses_g_5387_9_21_22_22_march23.jpg.jpg",
  },
  {
    id: 2,
    image:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/hooper-hp-e15083m-c3-eyeglasses_g_8787_07_09_2022.jpg",
  },
  {
    id: 3,
    image:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-transparent-full-rim-rectangle-8-12-yrs-hooper-poppin-2-0-hp-e10027l-c7_g_5183_22_03_2023.jpg",
  },
  {
    id: 4,
    image:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/blue-transparent-black-grey-full-rim-rectangle-kids--8-12-yrs--hooper-flexi-hooper-hp-e15084l-c3-eyeglasses_blue-transparent-black-grey-full-rim-rectangle-kids-(8-12-yrs)-hooper-flexi-hooper-hp-e15084l-c3-eyeglasses_g_5351_9_21_22_22_march23.jpg.jpg",
  },
  {
    id: 5,
    image:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-purple-full-rim-cat-eye-kids--5-8-yrs--hooper-flexi-hooper-hp-e10084-c2_hooper-hp-e10084-c2-eyeglasses_g_5476_22_march23.jpg.jpg",
  },
  {
    id: 6,
    image:
      "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-black-blue-transparent-black-full-rim-rectangle-kids--8-12-yrs--hooper-astra-hooper-hp-e10014l-c4_hooper-hp-e10014l-c4-eyeglasses_g_0982_22_march23.jpg.jpg",
  },
];

const ProductSlider = ({title, isLoop, hasHeading}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProductsCount = 3;

  const handleNext = () => {
    if (currentIndex + visibleProductsCount < products.length) {
      setCurrentIndex(currentIndex + visibleProductsCount);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleProductsCount);
    }
  };

  return (
    <Box
      width="100%"
      maxWidth={"1200px"}
      margin="0 auto"
      padding="40px 0"
      position="relative"
    >
      {hasHeading != false &&<ProductHeading
        title={title}
      ></ProductHeading> }
      <Flex align={"center"} justify={"center"} position={"relative"}> 
        {(currentIndex > 0 || isLoop) && (
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={handlePrev}
            position="absolute"
            top="50%"
            left="10px"
            transform="translateY(-50%)"
            aria-label="Previous"
          />
        )}
        <Flex
          overflow="hidden"
          justifyContent="center"
          gap={"60px"}
          maxWidth={"960px"}
          margin={"auto"}
        >
          {products
            .slice(currentIndex, currentIndex + visibleProductsCount)
            .map((product) => (
              <Box key={product.id} padding="0 10px">
                <Image src={product.image} alt={`Product ${product.id}`} />
              </Box>
            ))}
        </Flex>
        {(currentIndex + visibleProductsCount < products.length || isLoop) && (
          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={handleNext}
            position="absolute"
            top="50%"
            right="10px"
            transform="translateY(-50%)"
            aria-label="Next"
          />
        )}
      </Flex>
    </Box>
  );
};

export default ProductSlider;
