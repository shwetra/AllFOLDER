import React from 'react';
import {
  Box,
  Image,
  Text,
  TabIndicator,
  useBreakpointValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiUser } from "react-icons/bi";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { Data } from './Data';
import MyComponent from './Cards';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: true, lg: false });
  const [isOpen, setIsOpen] = React.useState(false);
  const text = JSON.parse(localStorage.getItem("cartdata") || 0);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box>
        <Box bg="blue.500" h="30px">
          <Text align="center" fontSize="16" fontWeight="600" color="white">
            Due to scheduled maintenance, all orders will be dispatched on 26th June, 2023
          </Text>
        </Box>
        <Box h="40px">
          <Text align="center" fontSize="16" fontWeight="600">
            Shipping Free on order above ₹800/-
          </Text>
        </Box>
      </Box>

      <Flex bg="#07154D" h="120px" justifyContent="space-around">
        <Flex w={{ base: "100%", md: "100%", lg: "80%" }} justifyContent="center">
          <Box
            bg="transparent"
            display={{ base: "none", lg: "flex" }}
            color="white"
            fontSize="24px"
            mt="50px"
          >
            {<BsSearch />}
          </Box>
          <Box w={{ base: "150px", lg: "10vw" }} m={{ base: "", lg: "auto" }} ml="20px" mt="15px">
            <Image src="https://github-production-user-asset-6210df.s3.amazonaws.com/104376252/249086110-3cb76102-d1fd-423d-aeba-666c36dbaae1.gif" />
          </Box>
          <Flex>
            <Text mt="57px" bg="transparent" color="white" fontSize="24px">
              {<BiUser />}
            </Text>
            <IconButton
              bg="transparent"
              color="white"
              fontSize="24px"
              icon={<Icon as={BsHandbag} />}
              ml="10px"
              mt="50px"
              aria-label="Cart"
              variant="ghost"
            >
            
            </IconButton>
            <Text bg="orange" h="25px" ml="-14px" pl="5px" borderRadius={"50%"} w="20px" fontSize={"16px"} fontWeight={700}  mt="60px" color={"blue"}>{text.length}</Text> 
          </Flex>
        </Flex>
      </Flex>

      <Box h="60px" display="flex" justifyContent="space-between" bg="#07154D">
        {SmallScreen && (
          <IconButton
            bg=""
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={toggleDrawer}
            mt="-70px"
            mr="15px"
            color="white"
          />
        )}

        {!SmallScreen && (
          <Box w="80%" pl="10%" m="auto" mt="15px">
            <Tabs position="relative" variant="unstyled" flexDirection="column">
              <TabList color="#FFFFFF">
                <Link to="/">
                <Tab>Home</Tab>
                </Link>
                <Tab>Hookah Collection</Tab>
                <Tab>Hookah Flavors</Tab>
                <Tab>Accessories</Tab>
                <Tab>Offer</Tab>
                <Tab>Premium Cigars</Tab>
                <Tab>Smoking Accessories</Tab>
              </TabList>
              <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )}
      </Box>

      {SmallScreen && (
        <Drawer isOpen={isOpen} placement="left" onClose={toggleDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bg="#2959BA">
              <Tabs position="relative" variant="unstyled" flexDirection="column">
                <TabList color="#FFFFFF">
                  <Tab>Home</Tab>
                  <Tab>Hookah Collection</Tab>
                  <Tab>Hookah Flavors</Tab>
                  <Tab>Accessories</Tab>
                  <Tab>Offer</Tab>
                  <Tab>Premium Cigars</Tab>
                  <Tab>Smoking Accessories</Tab>
                </TabList>
                <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
                <TabPanels>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
       
    </>
  );
};

 
