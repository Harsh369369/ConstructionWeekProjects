import {
  Box,
  Flex,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Stack,
  Image,
  border,
  Text,
  Divider,
  Center
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

function BottomNav() {
  return (
    <Flex
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"auto"}
      paddingX={'2rem'}
      backgroundColor={"#fbf9f7"}
    >
      <Flex
        width={"70%"}
        justifyContent={"space-between"}
        flexWrap={'wrap'}
        height={"70px"}
        wrap={'wrap'}
      >
            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'} >
              EYEGLASSES
            </Link>

            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'}>
              SCREEN GLASSES
            </Link>

            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'}>
              KIDS GLASSES
            </Link>

            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'}>
              CONTACT LENSES
            </Link>

            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'}>
              SUNGLASSES
            </Link>

            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'}>
              HOME EYE-TEST
            </Link>

            <Link href='/products' color={"black"} alignContent={"center"} fontWeight={'semibold'}>
              STORE LOCATOR
            </Link>

      </Flex>
      <Flex gap={"3px"}>
        <Image
          height={"30px"}
          borderRadius={"4px"}
          src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
          alt="logo1"
        />
        <Image
          height={"30px"}
          borderRadius={"4px"}
          src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
          alt="logo2"
        />
        <Image
          height={"30px"}
          borderRadius={"4px"}
          src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
          alt="logo3"
        />
      </Flex>
    </Flex>
  );
}

export default BottomNav;
