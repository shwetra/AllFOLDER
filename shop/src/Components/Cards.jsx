
    // const cards = [
    //     {
    //       id: 1,
    //       image: 'image-url-1.jpg',
    //       title: 'Card 1',
    //       description: 'This is the description for Card 1',
    //     },
    //     {
    //         id: 2,
    //         image: 'image-url-1.jpg',
    //         title: ' 1',
    //         description: 'This is the description for Card 1',
    //       },
    //       {
    //         id: 3,
    //         image: 'image-url-1.jpg',
    //         title: 'd 1',
    //         description: 'This is the description for Card 1',
    //       },
    //       {
    //         id: 4,
    //         image: 'image-url-1.jpg',
    //         title: 'rd 1',
    //         description: 'This is the description for Card 1',
    //       },
    //       {
    //         id: 5,
    //         image: 'image-url-1.jpg',
    //         title: 'Card 1',
    //         description: 'This is the description for Card 1',
    //       },{
    //         id: 6,
    //         image: 'image-url-1.jpg',
    //         title: 'C',
    //         description: 'This is the description for Card 1',
    //       },{
    //         id: 7,
    //         image: 'image-url-1.jpg',
    //         title: 'Ca',
    //         description: 'This is the description for Card 1',
    //       },{
    //         id: 8,
    //         image: 'image-url-1.jpg',
    //         title: 'Car',
    //         description: 'This is the description for Card 1',
    //       },
    //     // Add more cards here...
    //   ];
    import React, { useState, useRef } from 'react';
    import {
        Box,
        Heading,
        Link,
        Image,
        Text,
      
        Wrap,
        WrapItem,
        useBreakpointValue,
        SimpleGrid,
      } from '@chakra-ui/react';
    import {  Flex, Button } from '@chakra-ui/react';
    import {
       
        FaAngleLeft,
        FaAngleRight,
        FaRegClock,
      } from "react-icons/fa";
      import {BiUser} from "react-icons/bi"
    
    const MyComponent = () => {
        
        const cards = [
            {
              id: 1,
              image: 'https://github.com/shwetra/assa/assets/104376252/c59e7906-96f1-46e3-a4eb-72c345ddae7d',
              title: 'Fashion and Beauty Series 8',
            },
            {
                id: 2,
                image: 'https://github.com/shwetra/assa/assets/104376252/f32f7c51-e39b-43aa-b2ad-04e765a05332',
                title: ' Fashion and Beauty Series 7',
              },
              {
                id: 3,
                image: 'https://github.com/shwetra/assa/assets/104376252/6556d5aa-d501-4e85-8d3e-3ad880376f8f',
                title: 'Fashion and Beauty Series 6',
              },
              {
                id: 4,
                image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/248927879-0213fe1f-f669-4dd2-b606-6f37ae4785cc.jpg',
                title: 'Fashion and Beauty Series 5',
              },
              {
                id: 5,
                image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/248927868-726cc02d-78c5-4431-b14a-55e16b13926d.jpg',
                title: 'Fashion and Beauty Series 4',
              },{
                id: 6,
                image: 'https://github.com/shwetra/assa/assets/104376252/c59e7906-96f1-46e3-a4eb-72c345ddae7d',
                title: 'Fashion and Beauty Series 3',
              },{
                id: 7,
                image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/248927855-f1d01169-7514-416d-9969-1ff8fbe6d950.jpg',
                title: 'Fashion and Beauty Series 2',
              },{
                id: 8,
                image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/248927919-1f6dc435-a036-4f11-b293-f6ebdf0d0f37.jpg',
                title: 'Fashion and Beauty Series 1',
              },
            // Add more cards here...
          ];

          const Brands = [
            {
              id: 1,
              image: 'https://github.com/shwetra/assa/assets/104376252/514c9f51-9c8b-4e57-a038-10c15bb81ea4',
            },
            {
                id: 2,
                image: 'https://github.com/shwetra/assa/assets/104376252/abdef76a-5f18-4c19-8317-7e4f681301bb',
              },
              {
                id: 3,
                image: 'https://github.com/shwetra/assa/assets/104376252/8c80e70e-80c0-4343-98d8-5edf7ee71b69',
              },
              {
                id: 4,
                image: 'https://github.com/shwetra/assa/assets/104376252/1a11f936-6220-4eb1-aaa3-e585ffffdb3e',
              },
              {
                id: 5,
                image: 'https://github.com/shwetra/assa/assets/104376252/ea407880-2271-4612-9e93-ebf98f577f97',
              },{
                id: 6,
                image: 'https://github.com/shwetra/assa/assets/104376252/003390e3-0db6-4d34-b284-93bdf250d4ca',
              },{
                id: 7,
                image: 'https://github.com/shwetra/assa/assets/104376252/229fc218-1d7f-4064-a796-fa9dd7c67f62',
              },{
                id: 8,
                image: 'https://github.com/shwetra/assa/assets/104376252/9212bf12-cd86-46d2-8a5b-25686936517b',
              },
            // Add more brands...
          ];
      const containerRef = useRef(null);
      const [currentSlide, setCurrentSlide] = useState(0);
      const totalCards = cards.length;
      const cardsPerPage = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
    
      const handleNext = () => {
        setCurrentSlide((prevSlide) => {
          if (prevSlide < totalCards - 1) {
            return prevSlide + 1;
          } else {
            // Restart from the first card
            return 0;
          }
        });
      };

    //   popular brand function
      const [currentCard, setCurrentCard] = useState(0);
      const total = Brands.length;
      const PerPage = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 5 });
    
      const handlePreviousBrand = () => {
        setCurrentCard((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : total - 1));
      };
    
      const handleNextBrand = () => {
        setCurrentCard((prevSlide) => (prevSlide < total - 1 ? prevSlide + 1 : 0));
      };
    
      return (
<>
{/* Featured Categories */}
<Flex borderBottom={"2px solid gray"} justifyContent={"space-between"}  w="92%" m="auto" display={{base:"block",lg:"flex"}} mb='60px'>
<Box  h="50px" fontSize={"24px"} fontWeight={600} borderBottom={"2px solid #f28524"} >Featured Categories</Box>
<Flex >
  <Flex display={{base:"block",lg:"flex"}} gap={"20px"} mr="20px">
<Box  h={{base:"30px",lg:"50px"}}  fontSize={{base:"14px",lg:"17px"}} fontWeight={500} borderBottom={{lg:"2px solid #f28524"}} >Women Clothing</Box>
<Box  h={{base:"30px",lg:"50px"}} mr="10px" fontSize={{base:"14px",lg:"17px"}} fontWeight={500}  > Web Themes & Templates</Box>
</Flex>
<Flex display={{base:"block",lg:"flex"}}  gap={"20px"}>
<Box h={{base:"30px",lg:"50px"}}  fontSize={{base:"14px",lg:"17px"}} fontWeight={500}  >Electronics</Box>
<Box h={{base:"30px",lg:"50px"}}  fontSize={{base:"14px",lg:"17px"}} fontWeight={500}  > Beauty & Personal Care</Box>
</Flex>
</Flex>


</Flex>
        {/*  blog section */}
        <Box >
            <Flex>
                <Box h="50px" ml={{base:"20px",lg:"60px"}} w={{base:"60%",lg:"15%"}} fontSize={"24px"} fontWeight={600} borderBottom={"3px solid #f28524"} >Our Blog</Box>
                <Box h="50px" w="90%" borderBottom={"2px solid gray"}></Box>
            </Flex>
        <Flex align="center" justify="center" w="95%" m="auto"  >
          <Flex ref={containerRef} overflow="hidden" w="100%">
            <Flex w="100%"
              transition="transform 0.3s ease-in-out"
              transform={`translateX(-${currentSlide * (100 / cardsPerPage)}%)`}
            >
              {cards.map((card) => (
                <Box key={card.id} flexShrink={0} borderWidth="1px" borderRadius="lg" w="300px" overflow="hidden" m={4} bg="white">    
            <Box borderRadius="lg" overflow="hidden">
                <Image
                  transform="scale(1.0)"
                  src={
                    card.image
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.4s ease-in-out"
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                />
             
            </Box>
            <Heading fontSize="xl" fontWeight={600} pl="20px" marginTop="2">{card.title}</Heading>
            <Flex mt="10px" borderBottom={"1px solid gray"} pb="20px" justifyContent={"space-between"} w="100%" > 
                <Flex   pl="20px" >
                    <Text color={"gray"} fontSize={"13px"} mt="1">{<BiUser/>}</Text>
                    <Text ml="5px" color={"gray"} fontSize={"13px"} >Admin</Text>
                </Flex>
                <Flex mr="25%">
                <Text color={"gray"} fontSize={"13px"} mt="1">{<FaRegClock/>}</Text>
                    <Text ml="5px" color={"gray"} fontSize={"13px"}>31st May,2021</Text>
                </Flex>
                </Flex>
            
            <Text p="15px" color={"gray"} as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the lorem lorem
              ever 
            </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Button _hover={{
                   bgColor:"#f28524"
                  }} borderRadius={"50%"} bg={"transparent"} onClick={handleNext} ml={2}>
            {<FaAngleRight/>}
          </Button>
        </Flex>
        </Box>


{/* popular brand */}

<Box mt="50px" >
            <Flex mb="30px">
                <Box h="50px" ml={{base:"25px",lg:"60px"}} w={{base:"60%",lg:"20%"}} fontSize={"24px"} fontWeight={600} borderBottom={"3px solid #f28524"} >Popular Brands</Box>
                <Flex justifyContent={"end"} h="50px" w={{base:"40%",lg:"85%"}} borderBottom={"2px solid gray"}>
                <Button   _hover={{
                   bgColor:"#f28524"
                  }} borderRadius={"50%"} bg={"transparent"} onClick={handlePreviousBrand} ml={2}>
            {<FaAngleLeft/>}
          </Button>
                <Button  _hover={{
                   bgColor:"#f28524"
                  }} borderRadius={"50%"} bg={"transparent"} onClick={handleNextBrand} ml={2}>
            {<FaAngleRight/>}
          </Button>
                </Flex>
            </Flex>
        <Flex align="center" justify="center" w={{base:"95%",lg:"90%"}} m="auto"   mb="40px">
          <Flex ref={containerRef} overflow="hidden" w="100%">
          <Flex w="100%"
              transition="transform 0.3s ease-in-out"
              transform={`translateX(-${currentCard * (100 / PerPage)}%)`}
            >
              {Brands.map((Brands) => (
                <Box key={Brands.id} flexShrink={0} borderWidth="1px" borderRadius="lg" w="230px" overflow="hidden" m={4} bg="white">    
            <Box borderRadius="lg" overflow="hidden" h="110px">
                <Image h="70px"
                mt="20px"
                  transform="scale(1.0)"
                  src={
                    Brands.image
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.4s ease-in-out"
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                />
             
            </Box>
           
         
                </Box>
              ))}
           </Flex>
          </Flex>
         
        </Flex>
        </Box>

        </>
      );
    };
    
    export default MyComponent;
    