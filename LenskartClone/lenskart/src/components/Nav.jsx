import TopNav from "./TopNav";
import SecondNav from "./SecondNav";
import BottomNav from "./BottomNav";
import { Box, Flex, Image } from "@chakra-ui/react";



function Nav({showLogin}) {
    return(
        <Box  display={"flex"} flexDirection={'column'} width={'100%'} position={"fixed"} top={0} backgroundColor={"white"} zIndex={99}>
            <TopNav></TopNav>
            <SecondNav showLogin={showLogin}></SecondNav>
            <BottomNav></BottomNav>
        </Box>
    );
}

function MobileNav() {
    return(
        <Flex width={'100%'} paddingX={"2rem"} position={"fixed"} top={0} backgroundColor={"white"} zIndex={999}>
            <Image src=""></Image>
        </Flex>
    );
}


export default Nav