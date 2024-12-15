const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
     username:{ trype: string, required: true , unique: true},
     password:{type: string, required: true},  


});

module.exports = mongoose.Model('TeacherModel', TeacherSchema);