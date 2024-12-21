const express = require('express');
const mongoose = require('mongoose');
const AuthRoutes = require('../Backend/Routes/Login');
const TTRoutes = require('../Backend/Routes/TimeTable');
// connect toth emongoDB

 const app = express();
 app.use(express.json());

 app.use('/apiV1',AuthRoutes);
app.use('/api/timetable', TTRoutes);

 ap.listen(5000,()=>{
    console.log('server is running nov!')   
 });
