import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes