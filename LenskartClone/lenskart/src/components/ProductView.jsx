import { Flex, Box, Image, Text, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

function ProductView({
  id,
  title,
  size,
  color,
  images,
  price,
  discount,
  discountCode,
  isWishlisted,
}) {
  return (
    <Flex key={id} flexDirection={"column"} borderRadius={"10px"} border={'2px solid lightgrey'} position={"relative"}>
        <Box top={'10px'} right={'10px'} position={"absolute"}>
        {isWishlisted?<IoIosHeart color="red" size={'30px'}/>:<IoIosHeartEmpty size={'30px'}/>}
        
        </Box>
      <Box>
        <Image src={images} padding={'10px'} width={'100%'} marginTop={'40px'}></Image>
      </Box>
      <Flex flexDirection={"column"} textAlign={"left"}>
        <Text fontSize={"20px"} paddingX={'10px'}>{title}</Text>
        <Flex justifyContent={"space-between"} paddingX={'10px'}>
          <Flex>
            <Text fontSize={"15px"}>Size: {size}</Text>
          </Flex>
            <HStack spacing={1}>
            
              {color != null && color.map((color, index) => {
                return <Box key={index} border={'1px solid'} backgroundColor={color} boxSize={'20px'} borderRadius={"50%"}></Box>
              })}
            </HStack>
        </Flex>
        <Text fontSize={"20px"} paddingX={'10px'}>₹{price}</Text>
        <Text width="100%" color="#c1ab6c" bottom={0} backgroundColor="#f7f1df" padding={'10px'}>
          {discount}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProductView;
