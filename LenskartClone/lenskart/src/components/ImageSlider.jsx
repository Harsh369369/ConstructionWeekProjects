// ImageSlider.js
import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrow';

const ImageSlider = ({images}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  return (
    <Box width="100%" mx="auto" mt="20px">
      <Slider {...settings}>
        {images.map((url, index) => (
          <Box key={index}>
            <Image src={url} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
