import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from '../src/components/Home.js';
import Navbar from './components/Navbar';
import TheCircuit from './components/TheCircuit';
import Inheritance from './components/Inheritance';
import AdviceForKillers from './components/AdviceForKillers';
import CommendationForReforia from './components/CommendationForReforia';
import LevelUp from './components/LevelUp';


function App() {
  return (
    
      <Router>
    <Navbar />
    <Routes>
      
    <Route path='/bookfolio'element={<Home />}/>
      <Route path='/'element={<Home />}/>
      <Route path='/home'element={<Home />}/>
      <Route path='/thecircuit'element={<TheCircuit />}/>
       <Route path='/inheritance'element={<Inheritance />}/>
      <Route path='/adviceforkillers'element={<AdviceForKillers />}/>   
      <Route path='/CommendationForReforia'element={<CommendationForReforia />}/>     
      <Route path='/levelup'element={<LevelUp />}/>     
  
    </Routes>
    {/* <Footer /> */}
  </Router>
    
  );
}

export default App;
