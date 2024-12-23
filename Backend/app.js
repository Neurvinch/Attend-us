const express = require('express');
const mongoose = require('mongoose');
const AuthRoutes = require('../Backend/Routes/Login');
const TTRoutes = require('../Backend/Routes/TimeTable');
const atdRoutes = require('../Backend/Routes/Attendance');
// connect toth emongoDB

 const app = express();
 app.use(express.json());

 app.use('/apiV1',AuthRoutes);
app.use('/apiV1/timetable', TTRoutes);
app.use('/apiV1/attendance',atdRoutes);
 

app.listen(5000,()=>{
    console.log('server is running nov!')   
 });
