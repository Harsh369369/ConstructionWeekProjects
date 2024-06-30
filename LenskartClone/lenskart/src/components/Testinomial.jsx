import { Text, Flex, Box, AspectRatio } from "@chakra-ui/react";

function Testimonial() {
  return (
    <Box textAlign="center" backgroundColor={'#fff092'}>
      <Text fontSize={"30px"} pt={12}>
        MEET OUR HAPPY CUSTOMERS
      </Text>
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify={"center"}
        wrap="wrap"
        gap={6}
        width={"100%"}
        py={12}
      >
        <Box w="100%" maxW="32%">
          <AspectRatio ratio={16 / 9} w="100%">
            <iframe
              src="https://www.youtube.com/embed/HYPqf_eVvvM?si=PwxRJ7QVF612KxMh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </AspectRatio>
        </Box>
        <Box w="100%" maxW="32%">
          <AspectRatio ratio={16 / 9} w="100%">
            <iframe
              src="https://www.youtube.com/embed/HYPqf_eVvvM?si=PwxRJ7QVF612KxMh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </AspectRatio>
        </Box>
        <Box w="100%" maxW="32%">
          <AspectRatio ratio={16 / 9} w="100%">
            <iframe
              src="https://www.youtube.com/embed/HYPqf_eVvvM?si=PwxRJ7QVF612KxMh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  );
}

export default Testimonial;
