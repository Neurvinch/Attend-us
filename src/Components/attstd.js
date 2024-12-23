import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const AttStd = () => {
  const attendanceData = [
    { sno: 1, date: "18-12-2024", status: "Absent" },
    { sno: 1, date: "18-12-2024", status: "Absent" },
    { sno: 1, date: "18-12-2024", status: "Present" },
    { sno: 1, date: "18-12-2024", status: "Present" },
    { sno: 1, date: "18-12-2024", status: "Present" },
    { sno: 1, date: "18-12-2024", status: "Present" },
  ];
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
                 <button   onClick={() => navigate('/attstd')} className="block lg:inline-block hover:text-blue-500 py-2">
                     Attendance
                 </button>
                 <button onClick={() => navigate('/timestd')} className="block lg:inline-block hover:text-blue-500 py-2">
                     Timetable
                 </button>
                 <button onClick={() => navigate('/prostd')} className="block lg:inline-block hover:text-blue-500 py-2 cursor-pointer">
                     Profile
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

        <div className="mb-8 bg-gray-800 p-10 rounded-lg shadow-md">
          <p><span className="font-bold">Name:</span> Nisha</p>
          <p><span className="font-bold">Reg no:</span> 110823040</p>
          <p><span className="font-bold">Branch:</span> BE</p>
          <p><span className="font-bold">Dept:</span> CSE</p>
          <p><span className="font-bold">Semester:</span> 03</p>
        </div>

        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-black">
            <thead className="text-xs uppercase bg-gray-700 text-white">
              <tr>
                <th scope="col" className="px-6 py-3">sNO</th>
                <th scope="col" className="px-14 py-3">DATE</th>
                <th scope="col" className="px-6 py-3">PRESENT/ABSENT</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b border-black"
                >
                  <td className="px-10 py-4">{item.sno}</td>
                  <td className="px-10 py-4">{item.date}</td>
                  <td className="px-10 py-4">
                    {item.status === "Present" ? (
                      <span className="  font-bold">&#10004;</span>
                    ) : (
                      <span className=" font-bold">&#10008;</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};

export default AttStd;