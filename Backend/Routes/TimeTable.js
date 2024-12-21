const express = require('express');
const router = express.Router();
const TimeTable = require('../Models/TimeTable');
const AuthenticateToken = require('../MiddleWare/Koushik');


router.get('/', async (res,req)  =>{
    try {
        const timetable =await TimeTable.find();
        res.json(timetable);

        
    } catch (error) {
        res.statusCode(400).json(message:" Error in fetching data");
    }
})


router.post('/add',AuthenticateToken,async (res,req) =>{ 
    const {Day ,Subject ,Period ,Teacher} = req.body;
    try {
            const newData =  new TimeTable({Day,Period,Teacher,Subject})
            await newData.save();
            res.json({message:" Data Added Successfully"});
    } catch (error) {
        res.json({message : " Error in Adding Data"})
    }

} )

router.put('./update/:id',AuthenticateToken,async    (res,req) =>{
      
    try {
      await TimeTable.findByIdAndUpdate(req.params.id,req.body);
      res.json({message : " Data Updated Successfully"})
    } catch (error) {
         res.json({message : " Error in Updating Data"})
    }
})

module.exports = router;



