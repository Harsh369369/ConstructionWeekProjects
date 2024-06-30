import { Flex, Box, Text, AspectRatio, Image, Grid } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function OurPurpose() {
  return (
    <>
      <Nav></Nav>
      <Flex
        flexDirection={"column"}
        backgroundColor={"#000042"}
        color={"white"}
        fontFamily={"roboto"}
        marginTop={"170px"}
        padding={"2rem"}
      >
        <Text fontSize={"35px"} paddingY={"10px"}>
          Our purpose
        </Text>
        <Flex maxWidth={"1200px"} margin={"auto"}>
          <Box width={"50%"} padding={"20px"} textAlign={"left"}>
            <Text fontSize={"60px"} lineHeight={"1.2"}>
              We exist to transform the way people see and experience the world.
            </Text>
            <Text fontSize={"30px"} lineHeight={"1.2"} paddingTop={"20px"}>
              Since day one, Lenskart has defied expectations on how people
              engage with eyewear. Yes, eyecare and eyewear is what we do. But
              we exist for something much bigger than ourselves.
            </Text>
          </Box>
          <Flex width={"50%"} justify={"center"} align={"center"}>
            <AspectRatio ratio={16 / 9} w="80%" margin={"auto"}>
              <iframe
                src="https://www.youtube.com/embed/HYPqf_eVvvM?si=PwxRJ7QVF612KxMh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </AspectRatio>
          </Flex>
        </Flex>
      </Flex>
      <Banner
        image={"https://static1.lenskart.com/media/desktop/img/Apr22/more1.jpg"}
      ></Banner>
      <Banner
        image={"https://static1.lenskart.com/media/desktop/img/Apr22/more4.jpg"}
      ></Banner>
      <Text paddingTop={'20px'} fontSize={'30px'}>Our Focus</Text>
      <Box>
        <Box maxWidth={"1200px"} margin={"auto"}>
          <Text fontSize={"50px"} marginTop={"40px"}>
            Changing eyewear for good
          </Text>
          <Text fontSize={"25px"} marginTop={"20px"}>
            We started with the aim to disrupt eyewear every step of the way.
            And today, we stand as India’s Biggest Eyewear Brand.
          </Text>
          <Grid templateColumns={'repeat(2,1fr)'} gap={'40px'}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/p1.jpg"
            marginTop={"20px"}
          ></Image>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/p2.jpg"
            marginTop={"20px"}
          ></Image>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/p3.jpg"
            marginTop={"20px"}
          ></Image>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/p4.jpg"
            marginTop={"20px"}
          ></Image>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box maxWidth={"960px"} margin={"auto"}>
          <Text fontSize={"50px"} marginTop={"40px"}>
            For everyone
          </Text>
          <Text fontSize={"25px"} marginTop={"20px"}>
            At no point of time does one feel limited by price, style or ways to
            get the perfect pair at their doorstep.
          </Text>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/more2.jpg"
            marginTop={"20px"}
          ></Image>
        </Box>
      </Box>
      <Box backgroundColor={"#f0fcf8"}>
        <Box maxWidth={"960px"} margin={"auto"}>
          <Text fontSize={"50px"} marginTop={"40px"}>
            For every purpose
          </Text>
          <Text fontSize={"25px"} marginTop={"20px"}>
            Each pair is a personal story. And we want Lenskart to help you tell
            yours. From prescription to personal expression - use eyewear for
            seeing, running, flaunting, screen-scrolling and endless exploring.
            We’ve got it all. Just for you.
          </Text>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/more3.jpg"
            marginTop={"20px"}
          ></Image>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default OurPurpose;
