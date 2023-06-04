import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Box,
  Stack,
  Flex,
  SimpleGrid,
  Text,
  Image,
  Card,
  useBreakpointValue,
} from "@chakra-ui/react";

import {AiOutlineLeft} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import {BsBoxArrowRight} from "react-icons/bs"
import axios from "axios";
function List() {
  const Nav=useNavigate()
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    Reason: "" || "Business",
    Type: "" || "Internal",
    Divison: "" || "Filters",
    Category: "" || "Quality-A",
    Priority: "" || "High",
    Department: "" || "Quality",
    Location: "" || "Pune",
    projectTheme: "",
  });
 const hanleLogout=(()=>{
  localStorage.clear();
  Nav("/")
 })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      const res=await axios.post('https://techp.onrender.com/project', formData)
      alert("Created")
    } catch (error) {
      alert("somthing went wrong")
    }
   
  };

  const handleStartDateChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      startDate: event.target.value,
    }));
  };

  const handleEndDateChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      endDate: event.target.value,
    }));
  };
  return (
    <>
      <Box
     
        h={{ base: "100px", lg: "150px" }}
        objectFit="cover"
        borderBottomLeftRadius={{ base: "85px", lg: "85px" }}
        w="100%"
        backgroundImage="url(https://github.com/shwetra/assa/assets/104376252/41e2b0cf-a145-4fe1-afb8-123e91fc185f)"
        backgroundSize="cover"
      >
          <Image h="70px"   display={isSmallScreen ? "none" : "block"}  m="auto" pt="10px" src="https://github.com/shwetra/assa/assets/104376252/f72ad2c2-650d-41a6-b21b-9e6980bf86d2" alt="" srcSet="" />
        
        <Flex justifyContent={"space-between"} mt={{base:"",lg:"-12"}} pt={{base:"7"}}>
          
        <Button
              leftIcon={<AiOutlineLeft/>}
              color={"white"}
              fontWeight={"bold"}
              variant="ghost"
              _hover={{ color: "white" }}

            > Create Project
            </Button>
          

          {isSmallScreen && (
        <Button bg="transparent" fontWeight="bold"onClick={hanleLogout} variant="ghost" leftIcon={<BsBoxArrowRight style={{ fontSize: '28px' }} />} color="white">
          {/* <Image h="30px" src="https://github.com/shwetra/assa/assets/104376252/e99dd9c8-5bba-41a8-b398-39c571b9b906" alt="User" /> */}
        </Button>
      )}
        </Flex>
      </Box>

      <Card
        w={{ base: "90%", lg: "97%" }}
        m="auto"
        mt={{base:"-10px" ,lg:"-50px"}} ml="20px"
        borderRadius="lg"
        overflow={"scroll"}
        p="4"
        h="full
        "
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
        <form onSubmit={handleSubmit}>
          <Flex flexDirection={{ base: "column", lg: "row" }}>
            <Box spacing="4" w={{ base: "100%", lg: "80%" }}>
              <Input
                w={{ base: "100%", lg: "66%" }}
                borderWidth={{ base: "1px", lg: "1px" }}
                borderColor={{ base: "black", lg: "black" }}
                h="70px"
                placeholder="Enter Project Theme"
                name="projectTheme"
                value={formData.projectTheme}
                onChange={handleInputChange}
              />

              <SimpleGrid columns={[1, 2, 3]} gap={{ base: "3", lg: "8" }}>
                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Reason
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Reason"
                    value={formData.Reason}
                  >
                    <option value="Business">Business</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Transport">Transport</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Type
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Type"
                    value={formData.Type}
                  >
                    <option value="Internal">Internal</option>
                    <option value="External">External</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Divison
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Divison"
                    value={formData.Divison}
                  >
                    <option value="Filters">Filters</option>
                    <option value="Pumps">Pumps</option>
                    <option value="Glass">Glass</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Category
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Category"
                    value={formData.Category}
                  >
                    <option value="Quality-A">Quality-A</option>
                    <option value="Quality-B">Quality-B</option>
                    <option value="Quality-C">Quality-C</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Priority
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Priority"
                    value={formData.Priority}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Department
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Department"
                    value={formData.Department}
                  >
                    <option value="Startegy">Startegy</option>
                    <option value="Finance">Finance</option>
                    <option value="Quality">Quality</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Start Date as per Project Plan
                  </FormLabel>
                  <Input
                    h="50px"
                    type="date"
                    value={formData.startDate}
                    onChange={handleStartDateChange}
                    border="1px solid black"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    End Date as per Project Plan
                  </FormLabel>
                  <Input
                    h="50px"
                    type="date"
                    value={formData.endDate}
                    onChange={handleEndDateChange}
                    border="1px solid black"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Location
                  </FormLabel>
                  <Select
                    border="1px solid black"
                    h="50px"
                    onChange={handleInputChange}
                    name="Location"
                    value={formData.Location}
                  >
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </Select>
                </FormControl>


              </SimpleGrid>
              <Flex
                justifyContent={{ base: "start", md: "end", lg: "end" }}
                mr={{ lg: "21%" }}
                mt="20px"
              >
                <Text color={"gray"}> status: </Text>
                <Text fontWeight={600}> Registered </Text>
              </Flex>
            </Box>

            <Box>
              <Button type="submit" borderRadius={"20px"} colorScheme="blue">
                Save Project
              </Button>
            </Box>
          </Flex>
        </form>
      </Card>
    </>
  );
}

export default List;
