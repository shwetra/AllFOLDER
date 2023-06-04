
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import { Dashboard } from './Dashboard'
import PrivateRoute from './Private'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />

       
        <Route path='/dashboard' element={  <PrivateRoute> <Dashboard/>  </PrivateRoute>} />
       

    </Routes>
  )
}
