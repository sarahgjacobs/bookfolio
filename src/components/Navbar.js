import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='text-black flex justify-between items-center h-24 max-w-[1240px] px-4'>
            <h1 className='w-full text-3xl font-bold text-[#48d3e8]'>Bookfolio.</h1>
            <ul className='flex pt-6 uppercase'>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About Sarah Jacobs
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/thecircuit" className="navbar__link">
            The Circuit
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/inheritance" className="navbar__link">
            Inheritance
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/adviceforkillers" className="navbar__link">
            Advice for Killers
          </Link>
        </li><li className="navbar__item">
          <Link to="/CommendationForReforia" className="navbar__link">
          Commendation for Reforia
          </Link>
        </li><li className="navbar__item">
          <Link to="/levelup" className="navbar__link">
            Level Up
          </Link>
        </li>
      </ul>
      <div className="navbar__bar"></div>
      </div>
    
    )}
        


export default Navbar