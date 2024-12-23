
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';



const TimeStd = () => {
  const [currentTable, setCurrentTable] = useState(1);

  const timetable1 = [
    { date: "18-12-2024", subCode: "MA3351", subName: "Discrete and Maths", time: "8.30AM-12.30PM" },
    { date: "19-12-2024", subCode: "CS3401", subName: "Data Structures", time: "8.30AM-12.30PM" },
    { date: "20-12-2024", subCode: "PH3301", subName: "Physics", time: "8.30AM-12.30PM" },
  ];

  const timetable2 = [
    { date: "21-12-2024", subCode: "MA3351", subName: "Discrete and Maths", time: "8.30AM-12.30PM" },
    { date: "22-12-2024", subCode: "CS3401", subName: "Data Structures", time: "8.30AM-12.30PM" },
    { date: "23-12-2024", subCode: "PH3301", subName: "Physics", time: "8.30AM-12.30PM" },
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
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Timetable</h1>

        <div className="flex space-x-4 mb-5">
          <button
            onClick={() => setCurrentTable(1)}
            className={`px-4 py-2 rounded ${
              currentTable === 1 ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Model Examination-1
          </button>
          <button
            onClick={() => setCurrentTable(2)}
            className={`px-4 py-2 rounded ${
              currentTable === 2 ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Model Examination-2
          </button>
        </div>

        {currentTable === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Model Examination-1</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Sub Code</th>
                    <th className="px-6 py-3">Sub Name</th>
                    <th className="px-6 py-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable1.map((item, index) => (
                    <tr key={index} className="bg-gray-800 border-b border-gray-700">
                      <td className="px-6 py-4">{item.date}</td>
                      <td className="px-6 py-4">{item.subCode}</td>
                      <td className="px-6 py-4">{item.subName}</td>
                      <td className="px-6 py-4">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentTable === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Model Examination-2</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Sub Code</th>
                    <th className="px-6 py-3">Sub Name</th>
                    <th className="px-6 py-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable2.map((item, index) => (
                    <tr key={index} className="bg-gray-800 border-b border-gray-700">
                      <td className="px-6 py-4">{item.date}</td>
                      <td className="px-6 py-4">{item.subCode}</td>
                      <td className="px-6 py-4">{item.subName}</td>
                      <td className="px-6 py-4">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeStd;