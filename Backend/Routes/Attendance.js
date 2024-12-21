const express = require('express');
const router = express.Router;
const AuthenticateToken = require('../MiddleWare/Koushik');
const Attendance = require('../Models/Attendance');



router.get('/:studentId')
// ToDo:: more