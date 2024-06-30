import { Box, Link, Flex} from "@chakra-ui/react";

function TopNav() {
  return (
    <Flex width={'100%'} justifyContent={'space-between'} height={"57px"} alignItems={"center"} paddingX={'2rem'}>
      <Flex flexWrap={"wrap"} width={"80%"}> 
        <Link fontSize={"12px"} padding={"0 8px"} href="/our-purpose">Do More, Be More</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">Tryin3D</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">StoreLocator</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">Singapore</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">UAE</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="https://www.johnjacobseyewear.com/">John Jacobs</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="https://aqualens.in/">AquaLens</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">Cobrowising</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">Engineer Blog</Link>
        <Link fontSize={"12px"} padding={"0 8px"} href="">Partner With Us</Link>
      </Flex>
      <Flex>
        <Link fontSize={"12px"} padding={"0 8px"} href="">Contact Us</Link>
      </Flex>
    </Flex>
  );
}

export default TopNav;
