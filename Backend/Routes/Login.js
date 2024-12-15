const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const teacher = require('../Models/TeacherModel');
const Hod = require('../Models/HodModel');
const Student = require('../Models/StudentModels');
const AuthToken = require('../MiddleWare/Koushik');

const router= express.Router();

//  students login 
//    by their roolno and dob
//    so we store their details to
//   login before in the DB

router.post('/student/login',async (res,req) =>{
 const {rollno , dob} = req.body;
 
 const student = await Student.findOne({rollno});
 if(!student || new Date(student.dob).getTime !== new Date(dob).getTime){
    return res.status(400).json({message : "Invalid Rollno or Dob"});
    }
    const token = jwt.verify({id: student._id}, jwt_secret_key,{expiresIn : '1h'})
  res.json({token});
});

router.post('/Teacher/login',AuthToken,async (res,req) =>{
    const {username, paswword} = req.body

     const Teacher = await teacher.findOne({username});
     if(!Teacher ||hh ){}

})





