import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-white shadow-md'>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <h1 className='text-3xl font-bold text-[#48d3e8]'>
                    <Link to="/">Bookfolio.</Link>
                </h1>
                <ul className='flex space-x-4'>
                    <li>
                        <Link to="/" className="text-gray-700 hover:text-[#48d3e8] transition duration-300 ease-in-out">
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/thecircuit" className="text-gray-700 hover:text-[#48d3e8] transition duration-300 ease-in-out">
                            The Circuit
                        </Link>
                    </li>
                    <li>
                        <Link to="/inheritance" className="text-gray-700 hover:text-[#48d3e8] transition duration-300 ease-in-out">
                            Inheritance
                        </Link>
                    </li>
                    <li>
                        <Link to="/adviceforkillers" className="text-gray-700 hover:text-[#48d3e8] transition duration-300 ease-in-out">
                            Advice for Killers
                        </Link>
                    </li>
                    <li>
                        <Link to="/CommendationForReforia" className="text-gray-700 hover:text-[#48d3e8] transition duration-300 ease-in-out">
                            Commendation for Reforia
                        </Link>
                    </li>
                    <li>
                        <Link to="/levelup" className="text-gray-700 hover:text-[#48d3e8] transition duration-300 ease-in-out">
                            Level Up
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
