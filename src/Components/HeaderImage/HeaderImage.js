import React from "react";
import { Box } from "@chakra-ui/react";

const HeaderImage = () => {
  return (
    <Box
      display={("none", "block")}
      w="100%"
      h="100%"
      borderBottom="2px"
      borderBottomColor="greyLight"
      bgImage="https://picsum.photos/1300/300"
      bgPosition="center"
      bgRepeat="no-repeat"
    ></Box>
  );
};

export default HeaderImage;
