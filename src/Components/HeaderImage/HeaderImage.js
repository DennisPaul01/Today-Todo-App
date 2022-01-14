import React from "react";
import { Box } from "@chakra-ui/react";
import HeaderImg from "../../Assets/header.jpg";
const HeaderImage = () => {
  return (
    <Box
      w="100%"
      h="100%"
      borderBottom="2px"
      borderBottomColor="greyLight"
      bgImage={HeaderImg}
      bgPosition="center"
      bgRepeat="no-repeat"
    ></Box>
  );
};

export default HeaderImage;
