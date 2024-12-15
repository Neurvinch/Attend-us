const express = require('express');
const mongoose = require('mongoose');
const AuthRoutes = require('../Backend/Routes/Login');

// connect toth emongoDB

 const app = express();
 app.use(express.json());

 app.use('/apiv1',AuthRoutes);


 ap.listen(5000,()=>{
    console.log('server is running nov!')   
 });
