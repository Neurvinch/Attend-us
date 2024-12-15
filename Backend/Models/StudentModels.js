const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema({
    rollNo : { type:Number , required: true, unique: true},
     dob :{ type : Date , required: true},
    name:{ type: String, required: true},
    attendancePerc : {type: Number, default: 0}

})

module.exports = mongoose.model('StudentModels', studentScheme);
