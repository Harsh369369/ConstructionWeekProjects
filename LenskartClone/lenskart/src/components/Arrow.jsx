// CustomArrow.js
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={onClick}
        icon={<ChevronLeftIcon boxSize={6} />}
        aria-label="Previous Slide"
        colorScheme="teal"
      />
    );
  };

  export const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={onClick}
        icon={<ChevronRightIcon boxSize={6} />}
        aria-label="Next Slide"
        colorScheme="teal"
      />
    );
  };
