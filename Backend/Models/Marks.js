const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
    studentId :{type : mongoose.Schema.Types.ObjectId ,ref:'StudentModels', required: true},
    marks :{type: Number, rerquired : true},
    examType: {type: String, required : true},
    subject :{type : String , required: true},
});

modules.export = mongoose.model('MarkModels', marksSchema)