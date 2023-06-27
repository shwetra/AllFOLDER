import React, { useState } from 'react'
import Footer from './Footer'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const text = JSON.parse(localStorage.getItem("cartdata")) || []
    console.log(text)
  const nav=useNavigate()

    const [counts, setCounts] = useState(() => Array(text.length).fill(1));

    const handleIncrease = (index) => {
      const Default = [...counts];
      Default[index] += 1;
      setCounts(Default);
    };
  
    const handleDecrease = (index) => {
      if (counts[index] > 1) {
        const Default = [...counts];
        Default[index] -= 1;
        setCounts(Default);
      }
    };
  
    const handleDelete = (index) => {
      const sarika = [...counts];   // length
      const sangam = [...text];   // localstorage
      sarika.splice(index, 1);      //
      sangam.splice(index, 1);
      setCounts(sarika);
      localStorage.setItem('cartdata', JSON.stringify(sangam));
    };
  
  
  
    // Calculate total price
    const totalPrice = text.reduce((total, item, index) => {
      return total + (item.regularPrice * counts[index]);
    }, 0);


    const handleCheckout=(()=>{
        nav("/checkout")
    })


  return (
    <Box>
<Box mb="40px">
<Flex>
      {/* Cart items */}
      <Box w={'90%'} ml={'5%'} mt="20px"  borderTopLeftRadius={'30px'} border={'2px solid black'} >
        <Heading color={'teal'} ml={'100px'}>
          Cart Items
        </Heading>
        {text &&
          text.map((item, index) => {
            return (
                <Flex>
              <Flex  mt={'20px'} p="10px" borderTopLeftRadius={'30px'} borderBottomRightRadius={'30px'} flexDirection={{base:"column",lg:"row"}}>
                
              <Flex><Box>
                  <Image m="20px" h={'100px'} w={'100px'} src={item.image} alt="" />
                </Box>

                <Box ml={'10px'} mt={'30px'} w={'70%'} h={'100px'} borderBottom={'1px solid gray'}>
                  <Heading ml={'10px'} fontSize={'20px'}>
                    {item.name}
                  </Heading>
                  <Heading ml={'10px'} color={'teal'} fontSize={'15px'}>
                    {item.brand}
                  </Heading>
                  <Text ml={'10px'} color={'green'}>
                    {item.regularPrice}
                  </Text>
                </Box>
                </Flex>
                <Flex>
                   

                  <Button color={'black'} fontSize={'30px'} onClick={() => handleIncrease(index)}>
                    +
                  </Button>
                  <Button color={'red'} bg={'transparent'} fontSize={'20px'}>
                    {counts[index]}
                  </Button>
                  <Button color={'black'} fontSize={'30px'} onClick={() => handleDecrease(index)}>
                    -
                  </Button>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </Flex>
               

              </Flex>
              </Flex>
            );
          })}
      </Box>
      </Flex>
      {/* payment details */}
     <Flex justifyContent={"space-between"} w="80%" m="auto" mt="50px">
        <Text mt={4} fontSize="20px" fontWeight="bold" textAlign="center">
        Subtotal : {totalPrice}
        </Text>

        <Button onClick={handleCheckout} bg="blue.500" color="white" w="20%" >Checkout</Button>

        </Flex>
   


</Box>

 
<Footer/>
    </Box>
  )
}
