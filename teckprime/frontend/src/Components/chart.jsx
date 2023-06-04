import { Box, Button, Card, Flex, Heading, Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsBoxArrowRight } from "react-icons/bs"
import { AiOutlineLeft } from "react-icons/ai"
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const ChartPage = () => {
  const nav = useNavigate();
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })
  const [Data, setData] = useState("");
  const [startData, setstartData] = useState("");
  const [totalData, settotalData] = useState("");
  const [cancelData, setcancelData] = useState("");
  const [financeData, setFinancetotal] = useState("");
  const [financecloseData, setFinanceclose] = useState("");
  const [qltData, setqlttotal] = useState("");
  const [qltcloseData, setqltclose] = useState("");
  const [strData, setatrtotal] = useState("");
  const [strcloseData, setstrclose] = useState("");

  const data = [
    {
      name: 'Fin',
      closed: financecloseData,
      total:financeData,
    },
    {
      name: 'Qlt',
      closed: qltcloseData,
      total: qltData,
    },
    {
      name: 'str',
      closed: strcloseData,
      total: strData,
    },
  ];


  const finance=async()=>{
    const res= await axios.get("https://techp.onrender.com/department/Finance")
    setFinancetotal(res.data.totalCount)
    setFinanceclose(res.data.closedCount)
  }

  const qlt=async()=>{
    const res= await axios.get("https://techp.onrender.com/department/Quality")
    setqlttotal(res.data.totalCount)
    setqltclose(res.data.closedCount)
  }

  const str=async()=>{
    const res= await axios.get("https://techp.onrender.com/department/Startegy")
    setatrtotal(res.data.totalCount)
    setstrclose(res.data.closedCount)
    console.log(res.data)
  }

  const fetch=async()=>{
    const res= await axios.get("https://techp.onrender.com/closedproject")
    setData(res.data)
  }
  const fetch1=async()=>{
    const res= await axios.get("https://techp.onrender.com/runningproject")
    setstartData(res.data)
  }

  const fetch3=async()=>{
    const res= await axios.get("https://techp.onrender.com/canceledproject")
    setcancelData(res.data)
  }
  const fetch4=async()=>{
    const res= await axios.get("https://techp.onrender.com/totalprojects")
    settotalData(res.data)
  }
  useEffect(()=>{
    fetch()
    fetch1()
    fetch3()
    fetch4()
    finance()
    qlt()
    str()
  },[])

  const hanleLogout = () => {
    localStorage.clear();
    nav("/")
  }

  return (
    <Box h="100vh">
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

         > Dashboard
         </Button>
       

       {isSmallScreen && (
     <Button bg="transparent" fontWeight="bold"onClick={hanleLogout} variant="ghost" leftIcon={<BsBoxArrowRight style={{ fontSize: '28px' }} />} color="white">
       {/* <Image h="30px" src="https://github.com/shwetra/assa/assets/104376252/e99dd9c8-5bba-41a8-b398-39c571b9b906" alt="User" /> */}
     </Button>
   )}
     </Flex>
   </Box>
   {/* project details */}
      <Box overflow={{base:"scroll",lg:"hidden"}}   mt={{base:"20px",lg:"-30px"}}  h="90px" justifyContent={"space-between"} mr={{lg:"20px"}}  >

        {/* total project */}
        <SimpleGrid columns={[3,3,5]} spacing={3}>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "110px", lg: "80%" }} h="80px" ml={{base:"15px",lg:"35px"}}> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Total </Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{totalData}</Text>
      </Card>

              {/* total project */}
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "110px", lg: "80%" }} h="80px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Closed</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{Data}</Text>
      </Card>

          {/* total project */}
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "110px", lg: "80%" }} h="80px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Running</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{startData}</Text>
      </Card>

          {/* total project */}
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="80px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Closure Delay</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">2</Text>
      </Card>


              {/* total project */}
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="80px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Cancelled</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{cancelData}</Text>
      </Card>
      </SimpleGrid>
         </Box>


{/* chart grafh */}

         <Box border={"1px solid red"} h="full"> 
          <Text fontSize={"20px"} fontWeight={"600"} p="30px" >Department wise - Total Vs Closed</Text>
         <BarChart width={400} height={300} data={data} barCategoryGap="20%" barGap="5%">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar  dataKey="total" fill="#8884d8" barSize={10} />
      <Bar dataKey="closed" fill="#82ca9d"  barSize={10}/>
    </BarChart>
         </Box>
    </Box>
  )
}
