import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PhoneVerification  from './Login'
export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/login' element={<PhoneVerification/>}/>
   </Routes>
  )
}
