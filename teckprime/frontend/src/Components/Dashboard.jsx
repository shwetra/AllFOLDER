import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Img,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import List from "./AddList";
import { useNavigate } from "react-router-dom";
import {AddIcon} from "@chakra-ui/icons"
import { ChartPage } from "./chart";
import { AllList } from "./AllList";

export const Dashboard = () => {
  const nav = useNavigate();
  const [activeComponent, setActiveComponent] = useState("form");
  const isSmallScreen = useBreakpointValue({ base: false, lg: true });

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleLogout = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <Flex
      h="100vh"
      flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
      gap={"20px"}
    >
      <Box
        w={{ base: "100%", md: "70px", lg: "60px" }}
     
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
        <Box
           h={{ md:"100vh",lg:"100vh"}}
          w={{ base: "100%" }}
          boxShadow={"lg"}
          display={{ base: "flex", md: "block", lg: "block" }}
          justifyContent={{ base: "space-around" }}
        >
          <Button
          mt={{base:"0px",md:"200px",lg:"260px"}}
            color={"Black"}
            fontWeight={"bold"}
            variant="ghost"
            onClick={() => handleComponentChange("Chart")}
          >
            <Image
              h="30px"
              src="https://github.com/shwetra/assa/assets/104376252/a285d16b-fab3-4721-b127-7b909e6accdc"
            />
          </Button>
          <Button
            mt={{base:"0px",md:"50px",lg:"50px"}}
            color={"Black"}
            fontWeight={"bold"}
            variant="ghost"
            onClick={() => handleComponentChange("List")}
          >
            <Img
              h="30px"
              src="https://github.com/shwetra/assa/assets/104376252/44f7767a-f6f1-42bd-b80a-a5632fa57964"
            />
          </Button>

          <Button
          leftIcon={<AddIcon style={{ fontSize: '28px' }}/>}
           mt={{base:"0px",md:"50px",lg:"50px"}}
            color={"gray"}
            fontWeight={"bold"}
            variant="ghost"
            onClick={() => handleComponentChange("form")}
            _hover={{ color: "blue" }}
          >
            {/* <Image
              h="30px"
              src="https://github.com/shwetra/assa/assets/104376252/21d7e618-d899-480d-888b-1c3c4373a1fd"
              alt=""
              srcset=""
            /> */}


          </Button>
          {isSmallScreen && (
            <Button
            mt={{base:"0px",md:"140px",lg:"140px"}}
              bg="transparent"
              onClick={handleLogout}
              color="black"
              fontWeight="bold"
              variant="ghost"
            >
              <Image
                h="30px"
                src="https://github.com/shwetra/assa/assets/104376252/e99dd9c8-5bba-41a8-b398-39c571b9b906"
                alt="User"
              />
            </Button>
          )}
        </Box>
      </Box>

      <Box w="100%" mt="0px" h="auto" overflow={"scroll"}>
        {activeComponent === "form" && <List />}
        {activeComponent === "Chart" && <ChartPage/>}
        {activeComponent === "List" && <AllList/>}
      </Box>
    </Flex>
  );
};

// export default Sidebar;
