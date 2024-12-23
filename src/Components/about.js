import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function About () {
     const [menuOpen, setMenuOpen] = useState(false);
     const navigate = useNavigate();
    return(
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
                    <button  onClick={() => navigate('/header')} className="block lg:inline-block hover:text-blue-500 py-2">
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
            <main className='flex flex-col lg:flex-col items-center justify-between'>
                <h1 className='text-white text-4xl font-bold text-start p-10'>About Us </h1>
                <p className='text-white font-thin text-start p-10'>Jaya Engineering College (JEC) is an ISO 9001:2000 certified institution founded in the year 1995 with a focus on technological innovation, entrepreneurship and character building to the students. The college offers 9 UG courses and 7 PG courses. JEC is Affiliated to Anna University, Chennai and approved by AICTE, New Delhi. The college management team consists of well-experienced and committed Academicians and Administrators.

                Situated close to the Chennai Metropolis, the college is one of the foremost centres of graduate and professional education in the state of Tamilnadu. The range and depth of resources at the college have few peers. Within easy reach on the same campus and other sites, the college combines all the advantages of a comprehensive institution in the Arts and Science with a full complement of professional schools. Among these are business, dentistry and an unusually complete array of paramedical professions, including pharmacy and physiotherapy.

                The undergraduate and post-graduate courses in the college offers its students the optimum setting in tertiary education specialized courses with a contingent of accessible and dedicated faculty members, within a large highly diverse college offerings nearly unlimited academic opportunities and resources. The lecture halls and laboratory areas are modern and well-equipped. The college has extensive links with IT facilities for the benefit of the students.

                The college ensures that all students have the opportunity to acquire and develop personal and transferable skills, such as technical communication and team-working skills, which are directly appropriate to their future courses.
                </p>
            </main>
        </div>
      
    );
}

export default About;