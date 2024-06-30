import React from "react";
import {
  Box,
  Divider,
  AbsoluteCenter,
  Text
} from "@chakra-ui/react";

const DividerHeading = ({title}) => {
  return (
      <Box position="relative" padding="10" width={'100%'} marginTop={'10'}>
        <Divider color={"black"} width={'100%'} height={'1px'} orientation="horizontal" backgroundColor={"black"}/>
        <AbsoluteCenter bg="white" paddingX={'4'}>
          <Text fontSize={'30px'} width={"fit-content"}>
            {title}
          </Text>
        </AbsoluteCenter>
      </Box>
  );
};

export default DividerHeading;
