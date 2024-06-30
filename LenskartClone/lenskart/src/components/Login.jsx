import { Flex, Input, Box, Image, Link, Button, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Login({visibility, hideLogin}) {
    const handleClick = (e) => {
        e.preventDefault();
        hideLogin();
    }
  return (
    <Box backgroundColor={'#00000088'} position={"fixed"} display={visibility} top={0} bottom={0} left={0} right={0} width={'100vw'} height={'100vh'} zIndex={9999} justifyContent={"center"} alignItems={"center"}>
      <Flex flexDirection={"column"} backgroundColor={"white"} borderRadius={'10px'} width={'35%'} height={'95%'} padding={'20px'} justifyContent={"space-between"} alignItems={"center"}>
        <Flex width={'100%'}>
          <Text fontSize={'20px'} fontWeight={'500'} color={"#333368"} width={'100%'} textAlign={"left"}>Create an Account</Text>
          <IoCloseOutline onClick={handleClick}/>
        </Flex>
        <Flex width={'100%'}>
          <Input borderRadius={'10px'} placeholder="First Name" width={'100%'}></Input>
        </Flex>
        <Flex width={'100%'}>
          <Input borderRadius={'10px'} placeholder="Last Name"></Input>
        </Flex>
        <Flex width={'100%'}>
          <Input borderRadius={'10px'} placeholder="Mobile"></Input>
        </Flex>
        <Flex width={'100%'}>
          <Input borderRadius={'10px'} placeholder="Email"></Input>
        </Flex>
        <Flex width={'100%'}>
          <Input borderRadius={'10px'} placeholder="Password"></Input>
        </Flex>
        <Flex width={'100%'}>
          <Text>By creating this account, you agree to our</Text>
          <Link paddingLeft={'5px'} fontWeight={'400'} color="blue">Privacy Policy</Link>
        </Flex>
        <Button width={'100%'} backgroundColor={'teal'} onClick={handleClick}>Create an Account</Button>
        <Flex>
          <Text>Have an account?</Text>
          <Link>Sign In</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
