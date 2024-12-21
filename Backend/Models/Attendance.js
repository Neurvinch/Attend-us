const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId :{required: true, type: mongoose.Schema.Types.ObjectId,ref:'StudentModels'},
    date:{type: Date, required: true},
    status:{type: string , enum :['Present', 'Absent','BlackMarked'], required: true}
});

module.exports = mongoose.model('Attendance', attendanceSchema);