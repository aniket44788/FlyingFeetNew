import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Packages from './packages'
import Destination from './Destination'
import Footer from './Footer'
import About from './About'
import Trekking from './Trekking'
import Triundtrek from './Trekkings/Triundtrek'
import Kedarkanthatrek from './Trekkings/Kedarkanthatrek'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/trekking" element={<Trekking />} />

        <Route path="/treks/triund-trek" element={<Triundtrek />} />
        <Route path="/treks/kedarkantha-trek" element={<Kedarkanthatrek />} />





      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
