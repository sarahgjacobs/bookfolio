import React from 'react';
import './App.css';
import Home from '../src/components/Home.js';
import Navbar from './components/Navbar';
import Book from '../src/components/Book.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Book />
    </div>
  );
}

export default App;
