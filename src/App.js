import React from 'react'
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home'
import Pricing from './Components/pages/Pricing'
import About  from './Components/pages/About'




 function App() {
    

    return (
        <>
            <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter> 
        </>
    )
}

export default App;


