import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

export const AllList = () => {
  const [Data, setData] = useState();
  const nav = useNavigate();
  const [inputdata, SetInputData] = useState("");
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const isSmalllist = useBreakpointValue({ base: false, md:false ,lg: true });
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [query,setQuery]=useState()

  useEffect(() => {
    fetchProjects();
  }, [currentPage, perPage ,query]);

  async function fetchProjects() {
    try {
      const response = await fetch(
        `https://techp.onrender.com/projects?query=${query}&page=${currentPage}&limit=${perPage}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleLogout = () => {
    localStorage.clear();
    nav("/");
  };

  const handleCancel = async (id) => {
    try {
        const response = await axios.patch(`https://techp.onrender.com/statuscancel/${id}`, {
          status: 'Cancelled',
        }); 
        fetchProjects();
        // console.log(response.data)
      } catch (error) {
        console.error('Error cancelling project:', error);
      }
  };
  

const handleClose=async(id)=>{
    try {
        const response = await axios.patch(`https://techp.onrender.com/statusclose/${id}`, {
          status: 'Closed',
        }); 
        fetchProjects();
        // console.log(response.data)
      } catch (error) {
        console.error('Error cancelling project:', error);
      }
    
}

const handleStart=async(id)=>{
    try {
        const response = await axios.patch(`https://techp.onrender.com/statusrun/${id}`, {
          status: 'running',
        }); 
        fetchProjects();
        // console.log(response.data)
      } catch (error) {
        console.error('Error cancelling project:', error);
      }
    
}

const handleQuery=((e)=>{
  const {value}=e.target
  setQuery(value)
})

  return (
    <Box>
      {/* image box */}
      <Box
        h={{ base: "100px", lg: "150px" }}
        objectFit="cover"
        borderBottomLeftRadius={{ base: "85px", lg: "85px" }}
        w="100%"
        backgroundImage="url(https://github.com/shwetra/assa/assets/104376252/41e2b0cf-a145-4fe1-afb8-123e91fc185f)"
        backgroundSize="cover"
      >
        <Image
          h="70px"
          display={isSmallScreen ? "none" : "block"}
          m="auto"
          pt="10px"
          src="https://github.com/shwetra/assa/assets/104376252/f72ad2c2-650d-41a6-b21b-9e6980bf86d2"
          alt=""
          srcSet=""
        />

        <Flex
          justifyContent={"space-between"}
          mt={{ base: "", lg: "-12" }}
          pt={{ base: "7" }}
        >
          <Button
            leftIcon={<AiOutlineLeft />}
            color={"white"}
            fontWeight={"bold"}
            variant="ghost"
            _hover={{ color: "white" }}
          >
            Project Listing
          </Button>

          {isSmallScreen && (
            <Button
              bg="transparent"
              fontWeight="bold"
              onClick={handleLogout}
              variant="ghost"
              leftIcon={<BsBoxArrowRight style={{ fontSize: "28px" }} />}
              color="white"
            >
              {/* <Image h="30px" src="https://github.com/shwetra/assa/assets/104376252/e99dd9c8-5bba-41a8-b398-39c571b9b906" alt="User" /> */}
            </Button>
          )}
        </Flex>
      </Box>

      <Card
        h="100vh"
        ml={{base:"10px",lg:"30px"}}
        mr="10px"
        mt={{ base: "0", lg: "-20px" }}
        borderRadius={"15px"}
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
        {/* serch and sort box */}
        <Box display="flex" justifyContent={"space-between"} p="2">
          <Box borderBottom={"2px solid black"} p="2">
            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<SearchIcon color="gray.400" boxSize={5} />}
              />
              <Input
                mt="3"
                placeholder="Search"
                type="Search"
                variant={"unstyled"}
                onChange={(e) => SetInputData(e.target.value)}
              />
            </InputGroup>
          </Box>

          <Box display={"flex"} w={{base:"200px",md:"230px",lg:"300px"}} justifyContent={"space-evenly"} p="2">
            <Box w="32vw" m="auto" ml={{lg:"50px"}}>
              <Text fontSize="1rem" color="gray">
                Sort By :
              </Text>
            </Box>

            <Select variant={"unstyled"} value={query} onChange={handleQuery} m="auto" ml=".5"  border="none">
              <option value="Priority">Priority</option>
              <option value="Type">Type</option>
              <option value="Location">Location </option>
              <option value="Status">Status</option>
              <option value="Reason">Reason</option>
              <option value="Category">Category </option>
            </Select>
          </Box>
        </Box>

        {/* lislbox */}
        {isSmalllist && (
        <Box w="100%" h="40vh">
          <Table size="md" variant="simple">
            <Thead bgColor="blue.100">
              <Tr>
                <Th>Project Name</Th>
                <Th>Reason</Th>
                <Th>Type</Th>
                <Th>Division</Th>
                <Th>Category</Th>
                <Th>Priority</Th>
                <Th>Dept.</Th>
                <Th>Location</Th>
                <Th>Status</Th>
                <Th></Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody borderBottom="1.2px solid gray" bgColor="white">
            {Data &&
  Data.filter((value) => {
    if (inputdata === "") {
      return value;
    } else if (
      value.projectTheme &&
      value.projectTheme.toLowerCase().includes(inputdata.toLowerCase())
    ) {
      return value;
    } else if (
      value.Category &&
      value.Category.toLowerCase().includes(inputdata.toLowerCase())
    ) {
      return value;
    } else if (
      value.Type &&
      value.Type.toLowerCase().includes(inputdata.toLowerCase())
    ) {
      return value;
    }
  }).map((e) => (
                  <Tr>
                    <Box w="200px" p="5px" >
                      <Text fontWeight={"600"}>{e.projectTheme}</Text>
                      <Text>{e.startDate} to {e.endDate}</Text>
                    </Box>
                    <Td>{e.Reason}</Td>
                    <Td>{e.Type}</Td>
                    <Td>{e.Divison}</Td>
                    <Td>{e.Category}</Td>
                    <Td>{e.Priority}</Td>
                    <Td>{e.Department}</Td>
                    <Td>{e.Location}</Td>
                    <Td fontWeight={"600"}>{e.status}</Td>
                    <Td>
                      <Button
                        borderRadius={"15px"}
                        border="1px solid blue"
                        colorScheme="blue"
                        size="sm"
                        onClick={() => handleStart(e._id)}
                      >
                        Start
                      </Button>
                    </Td>
                    <Td>
                      <Button
                      ml="-40px"
                        borderRadius={"15px"}
                        border="2px solid blue"
                        size="sm"
                        onClick={() => handleClose(e._id)}
                      >
                        Close
                      </Button>
                    </Td>
                    <Td>
                      <Button
                       ml="-40px"
                        borderRadius={"15px"}
                        border="2px solid blue"
                        size="sm"
                        onClick={() => handleCancel(e._id)}
                      >
                        Cancel
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
          
        {/* psgination */}
        <Box display={"flex"} justifyContent={"center"} mt="20px">
        <Button bgColor={"blue.100"}  onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}>
          Previous
        </Button>
        <Button ml="10px" mr="10px">{currentPage}</Button>
        <Button  bgColor={"blue.100"} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </Box>
        </Box>
)}

{/* card for smallscreen */}
{ ! isSmalllist && (
    <SimpleGrid columns={[1,2]} spacing={5}>
        {Data &&
  Data.filter((value) => {
    if (inputdata === "") {
      return value;
    } else if (
      value.projectTheme &&
      value.projectTheme.toLowerCase().includes(inputdata.toLowerCase())
    ) {
      return value;
    } else if (
      value.Category &&
      value.Category.toLowerCase().includes(inputdata.toLowerCase())
    ) {
      return value;
    } else if (
      value.Type &&
      value.Type.toLowerCase().includes(inputdata.toLowerCase())
    ) {
      return value;
    }
  }).map((e) => (
<Box w="330px" br="17px" h="300px" borderRadius={"15px"} m="auto"  style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}>
<Flex justifyContent={"space-between"} p="10px">
<Box w="200px" p="5px" display={"block"}>
                      <Text fontWeight={"600"}>{e.projectTheme}</Text>
                      <Text>{e.startDate} to {e.endDate}</Text>
                    </Box>
                    <Text  fontWeight={"600"}>{e.status}</Text>
                    </Flex>
                    <Text p="5px">Reason : {e.Reason}</Text>
                    <Flex pl="5px" pr="5px" justifyContent={"space-between"}> 
                    <Text>Type : {e.Type}</Text>
                    <Text>Category : {e.Category}</Text>
                    </Flex>
                    <Flex p="5px" pr="5px" justifyContent={"space-between"}>
                    <Text> Div : {e.Divison}</Text>
                    <Text>Dept : {e.Department}</Text>
                    </Flex>
                    <Text p="5px" >Location : {e.Location}</Text>
                    <Text pl="5px" pr="5px" >Priority : {e.Priority}</Text>
                    <Flex justifyContent={"space-around"} mt="10px">
                      <Button
                        borderRadius={"15px"}
                        border="1px solid blue"
                        colorScheme="blue"
                        size="lg"
                        h="40px"
                        onClick={() => handleStart(e._id)}
                      >
                        Start
                      </Button>
                    
                   
                      <Button
                     
                        borderRadius={"15px"}
                        border="2px solid blue"
                        onClick={() => handleClose(e._id)}
                        size="lg"
                        h="40px"
                      >
                        Close
                      </Button>
                  
                      <Button
    
                        borderRadius={"15px"}
                        border="2px solid blue"
                        size="lg"
                        h="40px"
                        onClick={() => handleCancel(e._id)}
                      >
                        Cancel
                      </Button>
                   
                    </Flex>

</Box>
))}
<Box display={"flex"} justifyContent={"center"} mt="20px">
        <Button bgColor={"blue.100"}  onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}>
          Previous
        </Button>
        <Button ml="10px" mr="10px">{currentPage}</Button>
        <Button  bgColor={"blue.100"} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </Box>
</SimpleGrid>

)}




      </Card>

      
    </Box>
  );
};
