import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Packages from './assets/packages'
import Destination from './Destination'
import Footer from './Footer'
import About from './About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
