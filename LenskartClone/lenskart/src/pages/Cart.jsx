import { Image, Text, Flex, Link } from "@chakra-ui/react"

function Cart() {
    return(
        <>
        <Flex height={'67px'} maxWidth={'1200px'} justifyContent={"space-between"} alignItems={"center"} margin={"auto"}>
            <Image src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"></Image>
            <Flex>
                <Image src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"></Image>
                <Text>100% safe and secure</Text>
            </Flex>
        </Flex>
        <Flex height={'calc(-67px + 100vh)'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={'40px'}>
            <Text fontSize={'30px'}>Your shopping cart is empty! !</Text>
            <Link href="/" textDecoration={"none"} fontSize={'30px'} backgroundColor={"aqua"} padding={'5px 20px'} borderRadius={'50px'}>Continue Shopping</Link>
        </Flex>
        </>
    )
}

export default Cart