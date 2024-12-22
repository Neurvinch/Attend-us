const express = require('express');
const router = express.Router;
const AuthenticateToken = require('../MiddleWare/Koushik');
const Attendance = require('../Models/Attendance');



router.get('/:studentId',AuthenticateToken,async(res,req) =>{

    try {
        const attendanceStats = await Attendance.find({studentId: req.params.studentId});
        res.json(attendanceStats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/mark',AuthenticateToken,async(res,req) =>{
const{studentId,date,status} = req.body
    try {
         const newAttendance = await new Attendance({studentId,date,status});
         await newAttendance.save();
         res.json({message:"attendance marked sucessfully "});        
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
});
// ToDo:: more


module.exports = router;