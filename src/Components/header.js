import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import hi1 from '../assets/highsc1.png';

function HomePage(){
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <header className="flex justify-between items-center px-10 py-4 bg-gray-800 text-white">
        <img src={logo} alt="Logo" className="h-16" />
  
        
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent lg:p-0 p-4`}
        >
          <a href="#home" className="block lg:inline-block hover:text-blue-500 py-2">
            Home
          </a>
          <a href="#about" className="block lg:inline-block hover:text-blue-500 py-2">
            About
          </a>
          <a href="#contact" className="block lg:inline-block hover:text-blue-500 py-2">
            Contact
          </a>
          <div></div>
          <a href="https://facebook.com" className="block lg:inline-block text-gray-400 hover:text-blue-500 py-2">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" className="block lg:inline-block text-gray-400 hover:text-pink-500 py-2">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" className="block lg:inline-block text-gray-400 hover:text-blue-500 py-2">
            <FaLinkedin size={20} />
          </a>
        </nav>
      </header>
        <main className="flex flex-col lg:flex-row items-center justify-between">
        <div className="  px-20 text-center lg:text-start pt-10">
            <h1 className="text-6xl font-bold mb-5">Welcome to AttendEase!</h1>
            <p className="text-lg mb-4">Your friendly college attendance tracker</p>
            <p className="text-gray-400 mb-6">
              Say hello to stress-free tracking and organizing attendance is quick, easy, and fun.
              Whether you're a student or a professor, we've got you covered with smart tools and a delightful experience.
            </p>
            <button onClick={() => navigate('/signin') } 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg">
              Sign In
            </button>
          </div>
          <img src={hi1} alt="imag" className=" pt-20 " />   
        </main>
      </div>
    );
  }
  
export default HomePage;