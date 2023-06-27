import { Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar';
import AllRoute from './Components/AllRoutes';


function App() {
  return (
    <Box bgColor={"gray.100"}>
        <Navbar/>
       <AllRoute/>
    </Box>
  );
}

export default App;
