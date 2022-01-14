import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

import HelloHand from "../../Assets/hand.png";

const SideQuotes = () => {
  return (
    <Box w="100%" h="100%" borderLeft="2px" borderLeftColor="greyLight">
      <Text ml="20px" mb="20px" pt="20px" fontFamily="heading" fontSize="xs">
        Daily Hype
      </Text>
      <Box boxShadow="xl" p="6" rounded="md" bg="white" mx="20px">
        <Box display="flex">
          <Image src={HelloHand}></Image>
          <Text ml="10px" color="black" fontSize="xs" fontWeight="400">
            Hello there
          </Text>
        </Box>
        <Text color="black" fontSize="xs" fontWeight="400" mt="10px">
          “Done is better than perfect.” - Sheryl Sandberg
        </Text>
      </Box>
    </Box>
  );
};

export default SideQuotes;
