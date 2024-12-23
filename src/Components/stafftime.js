import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


function StaffTime() {
    const [page, setPage] = useState("home");
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileContent, setFileContent] = useState("");
  
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFileContent(event.target.result); // Read the file content
        };
        reader.readAsText(file); // Assuming it's a text file
      }
    };
  
    const saveData = () => {
      if (title && selectedFile) {
        alert(`Saved! Title: ${title}, File: ${selectedFile.name}`);
      } else {
        alert("Please add a title and upload a file before saving.");
      }
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
        <h1 className="text-2xl font-bold text-center text-white p-6 mb-6">TIMETABLE</h1>
        <div className="flex justify-center mb-20">
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">CSE</button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">2 YEAR</button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">B</button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mx-2">03</button>
          
        </div>
  
        <div className="flex space-x-10 justify-center ">
          
          <button
            onClick={() => setPage("excel")}
            className={` py-2 px-4 rounded ${page === "excel" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Excel
          </button>
          <button
            onClick={() => setPage("home")}
            className={` py-2 px-4 rounded ${page === "home" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Back
          </button>
        </div>
  
        {/* Content */}
        {page === "home" && (
          <div className="  mt-8">
            <h1 className=" text-center text-xl text-white font-bold">Upload your timetable</h1>
          </div>
        )}
  
        {page === "excel" && (
          <div className="mt-8 w-full max-w-md bg-white  shadow-lg p-4 rounded">
            <h1 className="text-xl font-bold mb-4">Excel Page</h1>
            {/* Add Title */}
            <input
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />
  
            {/* Upload File */}
            <input
              type="file"
              onChange={handleFileUpload}
              className="block w-full mb-4"
            />
  
            {/* Display Uploaded File */}
            {selectedFile && (
              <div className="mb-4">
                <p>Uploaded File: {selectedFile.name}</p>
                <div className="bg-gray-200 p-2 rounded">
                  <p className="font-mono text-sm">{fileContent || "Reading file..."}</p>
                </div>
              </div>
            )}
  
            {/* Save Button */}
            <button
              onClick={saveData}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default StaffTime;