import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/header';
import SignInPage from './Components/signin';
import HomeStd from './Components/homestd';
import HomeHod from './Components/homehod';
import HomeStaff from './Components/homestaff';
import About from './Components/about';
import Contact from './Components/contact';
import Profile from './Components/prostd';
import AttStd from './Components/attstd';
import TimeStd from './Components/timestd';
import StaffAtt from './Components/staffatt';
import StaffTime from './Components/stafftime';
import HodAtt from './Components/hodatt';
import HodTime from './Components/hodtime';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/header" element={<HomePage />} />
        <Route path="/homehod" element={<HomeHod />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/homestd" element={<HomeStd />} />
        <Route path="/homestaff" element={<HomeStaff />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/prostd" element={<Profile/>}/>
        <Route path="/attstd" element={<AttStd/>}/>
        <Route path="/timestd" element={<TimeStd/>}/>
        <Route path="/staffatt" element={<StaffAtt/>}/>
        <Route path="/stafftime" element={<StaffTime/>}/>
        <Route path="/hodatt" element={<HodAtt/>}/>
        <Route path="/hodtime" element={<HodTime/>}/>
      </Routes>
    </Router>
  );
}

export default App;
