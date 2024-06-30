import {Box, Image, Input, Link, Flex, Text} from '@chakra-ui/react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useState } from 'react';

function SecondNav({showLogin}) {
    return(
        <Flex width={'100%'} height={"50px"}justifyContent={'space-between'} alignItems={'center'} paddingX={'2rem'}>
            <Flex maxheight={"50px"} justifyContent={'space-between'} width={"25%"}>
                < Link href="https://www.lenskart.com/" width={'auto'}>
                <Image src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="logo" display={'block'} height={"100%"} width={'auto'}/></Link>
                <Image src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png" alt="contact number" width={'40%'} />
            </Flex>
            <Box width={"40%"} py={3}>
                <Input type="text" placeholder="What are you looking for?" width={"90%"} border={"1px solid grey"} borderRadius={"4px"}/>
            </Box>
            <Flex width={"30%"} justifyContent={'space-between'}>
                <Link>Track Order</Link>
                <Link onClick={showLogin}>Sign In & Sign Up</Link>
                <Link href='/wishlist' display={'flex'}><IoIosHeartEmpty size={'30px'}></IoIosHeartEmpty>Wishlist</Link>
                <Link href='/cart' display={'flex'}><IoBagOutline size={'30px'}></IoBagOutline>Cart</Link>
            </Flex>
        </Flex>
    );
}

export default SecondNav