import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from '../src/components/Home.js';
import Navbar from './components/Navbar';
import TheCircuit from './components/TheCircuit';


function App() {
  return (
    
      <Router>
    <Navbar />
    <Routes>
      
    <Route path='/home'element={<Home />}/>
      <Route path='/'element={<Home />}/>
      <Route path='/thecircuit'element={<TheCircuit />}/>
      {/* <Route path='/projects'element={<Projects />}/>
      <Route path='/contact'element={<Contact />}/>     */}
    </Routes>
    {/* <Footer /> */}
  </Router>
    
  );
}

export default App;
