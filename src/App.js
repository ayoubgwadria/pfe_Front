import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Login from './component/Login_form'
import Register from './component/Registration_form'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App