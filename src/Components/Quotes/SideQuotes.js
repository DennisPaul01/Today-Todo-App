import React, { useCallback, useEffect, useState } from "react";

import { Box, Text, Image } from "@chakra-ui/react";

import HelloHand from "../../Assets/hand.png";
import fire from "../../Assets/fire_1f525.png";
import HelloHandwebp from "../../Assets/hand.webp";
import firewebp from "../../Assets/fire_1f525.webp";

const SideQuotes = () => {
  const [quote, setQuote] = useState();
  const [quoteKanye, setQuoteKanye] = useState();
  const [author, setAuthor] = useState();

  const geneerateQuote = useCallback(async function () {
    try {
      const response = await fetch(
        "https://programming-quotes-api.herokuapp.com/Quotes/random"
      );
      if (!response.ok) {
        throw new Error("There might be a problem");
      }
      const data = await response.json();
      setQuote(data.en);
      setAuthor(data.author);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const geneerateQuoteKanye = useCallback(async function () {
    try {
      const response = await fetch("https://api.kanye.rest");
      if (!response.ok) {
        throw new Error("There might be a problem");
      }
      const data = await response.json();
      setQuoteKanye(data.quote);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    geneerateQuote();
    geneerateQuoteKanye();
    setInterval(() => {
      geneerateQuote();
      geneerateQuoteKanye();
    }, 7000);
    return () => {};
  }, []);

  return (
    <Box
      w="100%"
      maxHeight="100%"
      height="100%"
      borderLeft="2px"
      borderLeftColor="greyLight"
      display={["none", "none", "none", "block"]}
    >
      <Text ml="20px" mb="20px" pt="20px" fontFamily="heading" fontSize="xs">
        Daily Hype
      </Text>
      <Box boxShadow="xl" p="6" rounded="md" bg="white" mx="20px">
        <Box display="flex">
          <Image
            src={HelloHandwebp}
            fallbackSrc={HelloHand}
            alt="Hello Hand"
            htmlWidth="24"
            htmlHeight="27"
          ></Image>
          <Text ml="10px" color="black" fontSize="xs" fontWeight="400">
            Hello there
          </Text>
        </Box>
        <Text color="black" fontSize="xs" fontWeight="400" mt="10px">
          ???{quote}??? - {author}
        </Text>
      </Box>
      <Box boxShadow="xl" p="6" rounded="md" bg="white" mx="20px" mt="10px">
        <Box display="flex">
          <Image
            src={firewebp}
            fallbackSrc={fire}
            width="10%"
            htmlWidth="27"
            htmlHeight="27"
            alt="Fire"
          ></Image>
          <Text ml="10px" color="black" fontSize="xs" fontWeight="400">
            Kanye Tweets
          </Text>
        </Box>
        <Text color="black" fontSize="xs" fontWeight="400" mt="10px">
          "{quoteKanye}" - Kanye West
        </Text>
      </Box>
    </Box>
  );
};

export default SideQuotes;
