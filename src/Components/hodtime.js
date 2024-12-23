import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const timetableData = {
  CSE: {
    "2 YEAR": {
      B: {
        "03": [
          {
            date: "18-12-24",
            subCode: "MA3351",
            subName: "DISCRETE AND MATHS",
            time: "8:30 AM - 12:30 PM",
          },
          {
            date: "19-12-24",
            subCode: "CS3401",
            subName: "DATA STRUCTURES",
            time: "1:30 PM - 4:30 PM",
          },
        ],
      },
    },
    "1 YEAR": {
      B: {
        "04": [
          {
            date: "18-12-24",
            subCode: "PH3151",
            subName: "ENGINEERING PHYSICS",
            time: "9:00 AM - 12:00 PM",
          },
          {
            date: "19-12-24",
            subCode: "CY3151",
            subName: "ENGINEERING CHEMISTRY",
            time: "1:00 PM - 3:00 PM",
          },
        ],
      },
    },
  },
};

const HodTime = () => {
  const [selectedDept, setSelectedDept] = useState("CSE");
  const [selectedYear, setSelectedYear] = useState("2 YEAR");
  const [selectedSection, setSelectedSection] = useState("B");
  const [selectedSem, setSelectedSem] = useState("03");

  const timetable =
    timetableData[selectedDept]?.[selectedYear]?.[selectedSection]?.[selectedSem] || [];

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    return (
      <div className="bg-gray-900  text-white min-h-screen flex flex-col">
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
                   <button   onClick={() => navigate('/hodatt')} className="block lg:inline-block hover:text-blue-500 py-2">
                          Attendance
                      </button>
                      <button onClick={() => navigate('/hodtime')} className="block lg:inline-block hover:text-blue-500 py-2">
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
  
      <h1 className="text-2xl p-6 text-center font-bold mb-6">Model Examination Timetable</h1>

      {/* Dropdowns */}
      <div className="flex justify-center gap-4 mb-6">
        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="CSE">CSE</option>
          {/* Add more departments */}
        </select>

        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="1 YEAR">1 YEAR</option>
          <option value="2 YEAR">2 YEAR</option>
          {/* Add more years */}
        </select>

        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          {/* Add more sections */}
        </select>

        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={selectedSem}
          onChange={(e) => setSelectedSem(e.target.value)}
        >
          <option value="03">03</option>
          <option value="04">04</option>
          {/* Add more semesters */}
        </select>
      </div>

      {/* Timetable */}
      <div className="border rounded shadow-md p-4 bg-gray-800">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4 py-2">Date</th>
              <th className="border border-gray-700 px-4 py-2">Sub Code</th>
              <th className="border border-gray-700 px-4 py-2">Sub Name</th>
              <th className="border border-gray-700 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {timetable.length > 0 ? (
              timetable.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="border border-gray-700 px-4 py-2">{entry.date}</td>
                  <td className="border border-gray-700 px-4 py-2">{entry.subCode}</td>
                  <td className="border border-gray-700 px-4 py-2">{entry.subName}</td>
                  <td className="border border-gray-700 px-4 py-2">{entry.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center border border-gray-700 px-4 py-2">
                  No Timetable Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HodTime;
