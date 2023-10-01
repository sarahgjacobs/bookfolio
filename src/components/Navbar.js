import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='text-black flex justify-between items-center h-24 max-w-[1240px] px-4'>
            <h1 className='w-full text-3xl font-bold text-[#48d3e8]'>Bookfolio.</h1>
            <ul className='flex justify-between'>
                <li className="p-4">
                    <Link to="/" className="">
                        Home
                    </Link>
                </li>
                <li className="p-4">
                    <Link to="/about" className="">
                        About Sarah Jacobs
                    </Link>
                </li>
                <li className="p-4">
                    <Link to="/thecircuit" className="">
                        The Circuit
                    </Link>
                </li>
                <li className="p-4">
                    <Link to="/inheritance" className="">
                        Inheritance
                    </Link>
                </li>
                <li className="p-4">
                    <Link to="/adviceforkillers" className="">
                        Advice for Killers
                    </Link>
                </li><li className="p-4">
                    <Link to="/CommendationForReforia" className="">
                        Commendation for Reforia
                    </Link>
                </li><li className="p-4">
                    <Link to="/levelup" className="">
                        Level Up
                    </Link>
                </li>
            </ul>
            <div className="navbar__bar"></div>
        </div>

    )
}



export default Navbar