import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import HeaderImg from "../../Assets/header.jpg";

const HeaderImage = () => {
  const [imageUrl, setImageUrl] = useState(HeaderImg);
  const [error, setError] = useState(false);
  const geneerateImage = useCallback(async function () {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/random/?topics=work&orientation=landscape&client_id=6WofLvuz48k2pWbeqWTA_6Mvsca8ntVxZ1wo2EKGYwc"
      );
      if (!response.ok) {
        throw new Error("There might be a problem");
      }
      const data = await response.json();
      setImageUrl(data.urls.regular);
    } catch (error) {}
  });

  useEffect(() => {
    geneerateImage();
  }, []);

  return (
    <Box
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
