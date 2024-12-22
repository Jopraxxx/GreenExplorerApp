import React from 'react';
import { Link } from 'react-router-dom';

function Header({ openLogin }) {
    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-lime-600 text-white">
            <button className="text-2xl font-bold">
                GrnXplrr
            </button>
            <nav className="flex gap-6">
                <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
                <Link to="/green-places" className="text-white hover:text-gray-300 transition">Places</Link>
                <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
                <Link to="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
            </nav>
            <button
                onClick={openLogin}
                className="bg-transparent border-2 border-white text-white px-2 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition"
            >
                Log In
            </button>
        </header>
    );
}

export default Header;
