import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const StaffAtt = () => {
    const [attendance, setAttendance] = useState({
      Nisha: null,
      Ram: null,
      Love: null,
      Joe: null,
      Hendry: null,
    });
  
    const handleAttendance = (name, status) => {
      setAttendance({ ...attendance, [name]: status });
    };
  
    const handleSave = () => {
      console.log("Attendance saved: ", attendance);
      alert("Attendance saved successfully!");
    };
    const [menuOpen, setMenuOpen] = useState(false);
        const navigate = useNavigate();

    return (
        <div className="bg-gray-900 text-black min-h-screen flex flex-col">
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
                     <button   onClick={() => navigate('/staffatt')} className="block lg:inline-block hover:text-blue-500 py-2">
                            Attendance
                        </button>
                        <button onClick={() => navigate('/stafftime')} className="block lg:inline-block hover:text-blue-500 py-2">
                            Timetable
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
        <h1 className="text-2xl font-bold text-center text-white mb-6">Staff Attendance</h1>
        <div className="flex justify-center mb-4">
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">CSE</button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">2 YEAR</button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">B</button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">03</button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2"
          >
             Save
          </button>
        </div>
  
        <table className="table-auto w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-500 text-left">
              <th className="p-4">SNO</th>
              <th className="p-4">Name</th>
              <th className="p-4">Present</th>
              <th className="p-4">Absent</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(attendance).map((name, index) => (
              <tr key={name} className="border-b">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{name}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleAttendance(name, "Present")}
                    className={`px-4 py-2 rounded-lg ${
                      attendance[name] === "Present"
                        ? "bg-green-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    ✓
                  </button>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleAttendance(name, "Absent")}
                    className={`px-4 py-2 rounded-lg ${
                      attendance[name] === "Absent"
                        ? "bg-red-500 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    ✗
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StaffAtt;