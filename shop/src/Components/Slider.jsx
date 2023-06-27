import React from "react";
import { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";


const Slider = () => {
  const [counter, setCounter] = useState(0); 

  const craouselData = [
    {
      url:"https://github.com/shwetra/assa/assets/104376252/4dd533db-2527-43d1-8642-9d49e9eec734"
    },
    {
        url:"https://github.com/shwetra/assa/assets/104376252/c691f903-984c-47ec-8cd2-f25693d4939b"
      },
    {
        url:"https://github.com/shwetra/assa/assets/104376252/526fe41f-cc81-4b69-96a0-8934fd4cf4ed"
      },
    {
        url:"https://github.com/shwetra/assa/assets/104376252/d0639e7c-a46b-40fa-8a7b-3eb1d0f1a079"
      }
];


  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }setCounter((prev) => prev + 1);
    },3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
   
        <Box position="relative" h={{base:"200px",md:"300px",lg:"500px"}}>
          <Image
            boxSize={"100%"}
            objectFit="fill"
            src={craouselData[counter].url}
            alt=""
            width={"100%"}
            className="darken"
          />
        </Box>
       
  );
};

export default Slider;