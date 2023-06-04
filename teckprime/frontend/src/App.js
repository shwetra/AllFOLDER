import { Box} from '@chakra-ui/react'
import React from 'react'
import Login from './Components/Login'
import List from './Components/AddList'
import BarChart from './Components/chart'
import { Dashboard } from './Components/Dashboard'
import { AllRoutes } from './Components/AllRoutes'

export const App = () => {
  return (
      <Box>
        
<AllRoutes/>

 {/* <BarChart/> */}
        </Box>
  )
}
