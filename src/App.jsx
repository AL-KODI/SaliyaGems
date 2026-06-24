import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from "./pages/Welcome"
import Collection from "./pages/Collection";
import Shipping from "./pages/Shipping";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
function App() {
   return (
   <Routes>
      <Route path="/" element={<Welcome /> } />
      <Route path="/collection" element={<Collection />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
   );
}

export default App
