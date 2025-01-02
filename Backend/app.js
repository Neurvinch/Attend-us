const express = require('express');
const mongoose = require('mongoose');
const AuthRoutes = require('../Backend/Routes/Login');
const TTRoutes = require('../Backend/Routes/TimeTable');
const atdRoutes = require('../Backend/Routes/Attendance');
const MarkRoutes = require('../Backend/Routes/Marks')
// connect toth emongoDB

mongoose.connect( process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


 const app = express();
 app.use(express.json());

 app.use('/apiV1',AuthRoutes);
app.use('/apiV1/timetable', TTRoutes);
app.use('/apiV1/attendance',atdRoutes);
 app.use('/apiV1/marks',MarkRoutes)

app.listen(5000,()=>{
    console.log('server is running nov!')   
 });
