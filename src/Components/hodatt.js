import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const HodAtt = () => {
  const initialData = {
    "CSE-2-B-03": [
      { name: "NISHA", attendance: 45, warning: false },
      { name: "RAM", attendance: 35, warning: false },
      { name: "LOVE", attendance: 45, warning: false },
      { name: "JOE", attendance: 45, warning: false },
      { name: "HENDRY", attendance: 100, warning: false },
    ],
    "CSE-2-B-04": [
      { name: "ALICE", attendance: 75, warning: false },
      { name: "BOB", attendance: 50, warning: false },
      { name: "CHARLIE", attendance: 35, warning: false },
    ],
    "CSE-2-B-05": [
      { name: "EMMA", attendance: 95, warning: false },
      { name: "OLIVER", attendance: 30, warning: false },
      { name: "AVA", attendance: 60, warning: false },
    ],
  };

  const [department, setDepartment] = useState("CSE");
  const [year, setYear] = useState("2 YEAR");
  const [section, setSection] = useState("B");
  const [className, setClassName] = useState("03");
  const [data, setData] = useState(initialData);

  const currentKey = `${department}-${year.split(" ")[0]}-${section}-${className}`;
  const students = data[currentKey] || [];

  const toggleWarning = (index) => {
    const updatedStudents = students.map((student, i) =>
      i === index ? { ...student, warning: !student.warning } : student
    );
    setData({ ...data, [currentKey]: updatedStudents });
  };

  const handleSave = () => {
    console.log("Saved data:", data);
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

      <div className="flex items-center p-10 gap-7 justify-center mb-6">
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="1 YEAR">1 YEAR</option>
          <option value="2 YEAR">2 YEAR</option>
          <option value="3 YEAR">3 YEAR</option>
          <option value="4 YEAR">4 YEAR</option>
        </select>
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <select
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
        </select>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>

      

      <table className="w-full bg-white text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b border-gray-700 px-4 py-2">SNO</th>
            <th className="border-b border-gray-700 px-4 py-2">NAME</th>
            <th className="border-b border-gray-700 px-4 py-2">PRESENT/ABSENT</th>
            <th className="border-b border-gray-700 px-4 py-2">WARNING</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className={
                student.warning
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-white"
              }
            >
              <td className="border-b border-gray-700 px-4 py-2">{index + 1}</td>
              <td className="border-b border-gray-700 px-4 py-2">{student.name}</td>
              <td className="border-b border-gray-700 px-4 py-2">
                {student.attendance}%
              </td>
              <td className="border-b border-gray-700 px-4 py-2">
                <button
                  onClick={() => toggleWarning(index)}
                  className="bg-yellow-600 text-white px-2 py-1 rounded"
                >
                  {student.warning ? "Remove" : "Warn"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HodAtt;
