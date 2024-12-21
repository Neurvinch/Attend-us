const mongoose  = require('mongoose');

const TimeTableSchema = new mongoose.Schema({
    Day :{ type:string , required : true, },
    Period : { type:string , required : true, },
    Subject :{ type:string , required : true, },
    Teacher :{ type:string , required : true, },
});

module.exports = mongoose.model('TimeTable', TimeTableSchema);
