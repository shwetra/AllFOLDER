import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  useColorModeValue,
  Text,
  Card,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState(null);
  const nav=useNavigate()
 

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('https://techp.onrender.com/login', formData);
        localStorage.setItem('userData', JSON.stringify(response.data));
        nav("/dashboard")
      } catch (error) {
        if (error) {
          setResponse('Invalid credentials');
        }
      }
    }
  };
  
  
  
  
  return (
    <>

    <Box h="120vh" display={{base:"flex",lg:"flex"}} flexDirection={{base:"column"}}>

      <Box  h="80vh" w={{base:"100%"}}   backgroundRepeat={"no-repeat"}
       backgroundSize={{base:"140% 125%" ,lg:"cover"}}  backgroundImage={
          'url(https://github.com/shwetra/assa/assets/104376252/0d570894-77d2-4e27-b444-69e2367a0b20)'
        } mb="10px">

          <Image h="90px" m="auto" mt="60px" mb="15px" src="https://github.com/shwetra/assa/assets/104376252/f72ad2c2-650d-41a6-b21b-9e6980bf86d2" alt="" srcSet="" />
          <Text align={"center"} color="white" mb="15px">Online Project Management</Text>
        </Box>
    

    <Box  w="100%">
        <Card m="auto" w={{ base: "100%",md:"100%", lg: "430px" }} position={"relative"} top={{base:"-100",lg:"-300px"}} >
          <Box  rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack >
              <Stack align={{base:"start",lg:"center"}}>
                <Text fontWeight={"500"} mb="30px" mt="10px" fontSize={"22px"}>Login to get started</Text>
              </Stack>

              <FormControl id="email">
                <FormLabel color={"gray"} fontWeight={"400"}>Email</FormLabel>
                <Input
                  fontSize={"md"}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  
                />
                {formErrors.email && (
                  <Text color="red.500" fontSize="sm">
                    {formErrors.email}
                  </Text>
                )}
              </FormControl>
              <FormControl id="password" mt="20px">
                <FormLabel color={"gray"} fontWeight={"400"}>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {formErrors.password && (
                  <Text color="red.500" fontSize="sm">
                    {formErrors.password}
                  </Text>
                )}
              </FormControl>
              <Stack>
                <Text textAlign="end" color="blue.500" fontSize="sm">
                  Forgot Password?
                </Text>
              </Stack>

              <Stack >
                <Button
                w={{base:"100%",lg:"200px"}}
                h="40px"
                m="auto"
                mt="40px"
                borderRadius={"20"}
                  onClick={handleLogin}
                  loadingText="Submitting"
                  bg={"blue.600"}
                  color={"white"}
                >
                 Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Card>
      </Box>

      </Box>
      <Text align={"center"} mt={{base:"-20px",lg:"-240px"}}>{response}</Text>
    </>
  );
};

export default Login;
