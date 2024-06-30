import {
  Heading,
  Box,
  Text,
  Image,
  Flex,
  Divider,
  Center,
  Link,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

function Footer() {
  return (
    <Box
      height={"fit-content"}
      backgroundColor={"#000042"}
      bottom={0}
      textAlign={"left"}
      color={"white"}
      paddingX={"2rem"}
      borderTop={"1px solid white"}
    >
      <Flex justifyContent={"space-between"} padding={"2rem"}>
        <Flex width={"40%"} justifyContent={"space-between"}>
          <Flex flexDirection={"column"} gap={"20px"}>
            <Text fontSize={"22px"}>Services</Text>
            <Text>Store Locator</Text>
            <Text>Buying Guide</Text>
            <Text>Frame Size</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"20px"}>
            <Text fontSize={"22px"}>About Us</Text>
            <Text>We Are Hiring</Text>
            <Text>Refer And Earn</Text>
            <Text>About Us</Text>
            <Text>Lenskart Coupons</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"20px"}>
            <Text fontSize={"22px"}>Help</Text>
            <Text>FAQ's</Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justify={"center"}
          gap={"20px"}
          width={"30%"}
          textAlign={"center"}
        >
          <Flex>
            <Image src="https://static.lenskart.com/media/desktop/img/play-store.svg"></Image>
            <Image src="https://static.lenskart.com/media/desktop/img/app-store.svg"></Image>
          </Flex>

          <Text overflowWrap={wrap}>
            Download Lenskart App to buy Eyeglasses, Sunglasses and Contact
            Lenses
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        bottom={0}
        position={"relative"}
        paddingY={"2rem"}
        justifyContent={"space-between"}
      >
        <Flex justifyContent={"space-between"} width={"280px"}>
          <Text>T & C</Text>
          <Text>Privacy</Text>
          <Text>Disclaimar</Text>
        </Flex>
        <Flex justifyContent={"space-between"} width={"300px"} paddingRight={'20px'}>
          <Text>Version 1.0.0</Text>
          <hr />
          <Text>Follow Us</Text>
          <Flex width={'100px'} justifyContent={"space-between"}>
            <Link
              href="https://www.facebook.com/Lenskartindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <Box>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                </svg>
              </Box>
            </Link>
            <Link
              href="https://instagram.com/lenskart/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <Box>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.16c3.206 0 3.586.015 4.847.071 1.172.052 1.805.249 2.226.413a3.71 3.71 0 0 1 1.379.895c.421.422.68.82.895 1.378.164.422.36 1.06.412 2.227.057 1.265.07 1.645.07 4.847 0 3.206-.013 3.586-.07 4.846-.051 1.172-.248 1.805-.412 2.227a3.71 3.71 0 0 1-.895 1.378 3.69 3.69 0 0 1-1.379.895c-.421.165-1.059.361-2.226.413-1.266.056-1.645.07-4.847.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.248-2.226-.413a3.71 3.71 0 0 1-1.379-.895 3.691 3.691 0 0 1-.895-1.378c-.164-.422-.36-1.06-.412-2.227-.057-1.265-.07-1.645-.07-4.846 0-3.207.013-3.586.07-4.847.051-1.172.248-1.805.412-2.227.216-.558.478-.96.895-1.378.422-.422.82-.68 1.379-.895.421-.164 1.059-.361 2.226-.413 1.261-.056 1.64-.07 4.847-.07ZM12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a5.857 5.857 0 0 0-2.128 1.388A5.88 5.88 0 0 0 .628 4.139C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12s.014 3.666.07 4.945c.057 1.275.263 2.152.558 2.911.31.792.717 1.463 1.388 2.128a5.866 5.866 0 0 0 2.123 1.383c.764.296 1.636.502 2.911.558 1.28.056 1.688.07 4.945.07 3.258 0 3.666-.014 4.946-.07 1.275-.056 2.151-.262 2.91-.558a5.866 5.866 0 0 0 2.124-1.383 5.866 5.866 0 0 0 1.383-2.123c.295-.764.501-1.636.558-2.911.056-1.28.07-1.688.07-4.945 0-3.258-.014-3.666-.07-4.946-.057-1.275-.263-2.151-.558-2.91a5.62 5.62 0 0 0-1.374-2.133A5.866 5.866 0 0 0 19.861.633C19.097.338 18.225.13 16.95.075 15.666.015 15.258 0 12 0Z"></path>
                  <path d="M12 5.836A6.166 6.166 0 0 0 5.836 12 6.166 6.166 0 0 0 12 18.164 6.166 6.166 0 0 0 18.164 12 6.166 6.166 0 0 0 12 5.836Zm0 10.162A3.999 3.999 0 1 1 12.001 8 3.999 3.999 0 0 1 12 15.998ZM19.847 5.592a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0Z"></path>
                </svg>
              </Box>
            </Link>
            <Link
              href="https://twitter.com/lenskartME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <Box>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M24 4.309a9.83 9.83 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.925 4.925 0 0 0-8.39 4.49A13.974 13.974 0 0 1 1.671 2.9a4.902 4.902 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.936 4.936 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829 4.964 4.964 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.42 9.886 9.886 0 0 1-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.309"
                  ></path>
                </svg>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
