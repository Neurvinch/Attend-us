import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function HomeStaff() {
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
           <button onClick={() => navigate('/header')} className="block lg:inline-block hover:text-blue-500 py-2">
                        Home
                    </button>
                    <button onClick={() => navigate('/about')} className="block lg:inline-block hover:text-blue-500 py-2 cursor-pointer">
                        About
                    </button>
                    <button  onClick={() => navigate('/contact')} className="block lg:inline-block hover:text-blue-500 py-2">
                        Contact
                    </button>
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
            <h1 className="text-6xl font-bold mb-5">Welcome Staff..!</h1>
            <p className="text-lg mb-4">Your friendly college attendance tracker</p>
            <p className="text-gray-400 mb-6">
              Say hello to stress-free tracking and organizing attendance is quick, easy, and fun.
            </p>
            </div>
                    
        <div className="grid grid-cols-2 grid-rows-10 gap-4 font-bold text-lg  text-white  uppercase w-screen text-center  h-80 p-8 lg:h-96 lg:m-20">
            <div onClick={() => navigate('/staffatt')} className="bg-[#115DFC] rounded-lg row-span-8 row-start-3 pt-20 lg:pt-20">Attendance</div>
            <div onClick={() => navigate('/stafftime')} className="bg-[#115DFC] rounded-lg row-span-8 row-start-3 pt-20 lg:pt-20">timetable</div>
        </div>    
        </main>
    </div>
    
  );
}

export default HomeStaff;