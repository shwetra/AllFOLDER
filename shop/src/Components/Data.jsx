import React, { useEffect, useState } from 'react'
import {
    Box,
    Heading,
    Image,
    SimpleGrid,
    Text,
    useToast,
  
  
  } from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom'
import {  Flex, Button } from '@chakra-ui/react';
import MyComponent from './Cards';
import Footer from './Footer';
import Slider from './Slider';
const card=[
    {
      "image": "https://shopdop.in/cdn/shop/products/PrimerosByDavidoff_Cigar_2.jpg?v=1678890872&width=533",
      "name": "Primeros by Davidoff Dominican Handmade Cigar",
      "discountPrice": 999,
      "regularPrice": 1999
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/DavidoffGrandCruNo.5Cigar.jpg?v=1677054206",
      "name": "Davidoff Grand Cru No. 5 Cigar (Single Piece)",
      "discountPrice": 1499,
      "regularPrice": 2499
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/ZinoNicaraguaToroCigar_4.jpg?v=1675763854&width=533",
      "name": "Zino Nicaragua Toro Cigar - Single Piece",
      "discountPrice": 799,
      "regularPrice": 1299
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/DavidoffNicaragua.jpg?v=1678890807&width=533",
      "name": "Davidoff Nicaragua Toro Cigar",
      "discountPrice": 1199,
      "regularPrice": 1999
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/CamachoNicGranChurchillCigars.jpg?v=1677052849&width=533",
      "name": "Camacho Nicaragua Gran Churchill Cigars (Single Piece)",
      "discountPrice": 899,
      "regularPrice": 1499
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/CamachoCorojoRobustoTubosCigars.jpg?v=1675762838&width=533",
      "name": "Camacho Corojo Robusto Tubos Cigars (Single Piece)",
      "discountPrice": 699,
      "regularPrice": 999
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/DavidoffOroBlancoCigar.jpg?v=1635896744&width=533",
      "name": "PDavidoff Oro Blanco Cigar",
      "discountPrice": 1699,
      "regularPrice": 2999
    },
    {
      "image": "https://shopdop.in/cdn/shop/products/NoirHookahFlavors.jpg?v=1670670974&width=533",
      "name": "Camacho Corojo Robusto Tubos Cigars (Single Piece)",
      "discountPrice": 1099,
      "regularPrice": 1899
    }
  ]


export const Data = () => {
    const toast = useToast()
    const [data, setData] = useState([]);
    const nav = useNavigate()
 

const handleCart=(item)=>{
    setData([...data, item]);
      localStorage.setItem("cartdata", JSON.stringify([...data, item]));
      toast({
        title: 'Item added to cart',
        position: 'top',
        status: 'success',
        color: 'pink'
      })
      nav('/cart')
    }
    //getting products added in cart in array
     useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('cartdata')) || [];
        setData(storedData);   
     },[])




  return (
    <>
    <Slider/>
     <Box  bgColor={"white"}>
    <Flex>
        <Box h="50px" ml={{base:"20px",lg:"60px"}} w={{base:"70%",lg:"15%"}} fontSize={"24px"} fontWeight={600} borderBottom={"3px solid #f28524"} >Our Products</Box>
        <Box h="50px" w="90%" borderBottom={"2px solid gray"}></Box>
    </Flex>

  <SimpleGrid columns={[1,2,3,4]}  w="85%" m="auto">
      {card.map((card ,index) => (
        <Box key={index} border="1px solid gray" borderRadius="20px"   m={4} bg="gray.100">    
    <Box  overflow={"hidden"} m="20px">
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
    <Box h="150px">
    <Heading fontSize="20px" fontWeight={700} pl="20px" marginTop="2">{card.name}</Heading>
    <Box mt="10px" pb="20px" pl="20px"  w="100%" >
        <Text  fontSize={"14px"}  textDecoration="line-through">
          Rs : {card.discountPrice}
        </Text>
        <Text  fontWeight={600}>
         From Rs : {card.discountPrice}
        </Text>
        </Box>
       
        </Box>
        <Button onClick={()=>handleCart(card)} mb="20px" border={"1px solid black"} w="80%" borderRadius={"20px"} ml="10%"> Add to Cart</Button>

        </Box>
      ))}
      </SimpleGrid>

      <MyComponent/>
      <Footer/>

</Box>
</>
  )
}
