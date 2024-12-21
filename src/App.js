
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/header';
import SignInPage from './Components/signin';
import HomeStd from './Components/homehod';
import HomeHod from './Components/homestaff';
import HomeStaff from './Components/homestd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homehod" element={<HomeHod />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/homestd" element={<HomeStd />} />
        <Route path="/homestaff" element={<HomeStaff />} />
      </Routes>
    </Router>
  );
}

export default App;


