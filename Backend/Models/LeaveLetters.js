const mongoose = require('mongoose');


const Leave_Od = mongoose.SchemaType({
    studentName :{ type: String, required: true , ref : 'StudentModels'},
    leaveDate :{type : Date, required : true},
    leaveType : {type: String , required : true },
    fileName : { type: String , required: true},
    filetype: { type : String , required : true},
    filePath : { type : String , required : true },
    fileSize : {type: Number, required : true},
})


mo9dule.exports = mongoose.model('Leave_ODModel', Leave_Od);