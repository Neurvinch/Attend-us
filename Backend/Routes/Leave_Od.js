const express = require("express");
const router = express.Router;
const AuthenticateToken = require("../MiddleWare/Koushik");
const Leave_od = require("../Models/LeaveLetters");


router.post( "/addLeave",AuthenticateToken , async (res,req,) => {
         const{ studentName , leaveType, LeaveDate,fileName,fileType,filePath,fileSize} = req.body;

         try {
            const LeaveLetterDetails = await 
            
         } catch (error) {
            
         }
})
