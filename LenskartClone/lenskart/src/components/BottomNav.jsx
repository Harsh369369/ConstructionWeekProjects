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
  Divider
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

function BottomNav() {
  return (
    <Flex
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"70px"}
      paddingX={'2rem'}
      backgroundColor={"#fbf9f7"}
    >
      <Flex
        width={"70%"}
        justifyContent={"space-between"}
        flexWrap={wrap}
        height={"70px"}
      >
            <Button variant="link" color={"black"}>
              EYEGLASSES
            </Button>

            <Button variant="link" color={"black"}>
              SCREEN GLASSES
            </Button>

            <Button variant="link" color={"black"}>
              KIDS GLASSES
            </Button>

            <Button variant="link" color={"black"}>
              CONTACT LENSES
            </Button>

            <Button variant="link" color={"black"}>
              SUNGLASSES
            </Button>

            <Button variant="link" color={"black"}>
              HOME EYE-TEST
            </Button>

            <Button variant="link" color={"black"}>
              STORE LOCATOR
            </Button>

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
