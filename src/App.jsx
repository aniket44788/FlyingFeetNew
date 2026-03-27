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
import Hemantatrek from './Trekkings/Hemantatrek'
import Karerilaketrek from './Trekkings/Karerilaketrek'
import Kheerganga from './Trekkings/Kheerganga'
import Thatharnatrek from './Trekkings/Thatharnatrek'
import Sarpastrek from './Trekkings/Sarpastrek'
import Nagtibbatrek from './Trekkings/Nagtibbatrek'

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
        <Route path="/treks/hampta-pass-trek" element={<Hemantatrek />} />
        <Route path="/treks/kareri-lake-trek" element={<Karerilaketrek />} />
        <Route path="/treks/kheerganga-trek" element={<Kheerganga />} />
        <Route path="/treks/thatharnatrek" element={<Thatharnatrek />} />
        <Route path="/treks/sar-pass-trek" element={<Sarpastrek />} />
        <Route path="/treks/nag-tibba-trek" element={<Nagtibbatrek />} />





      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
