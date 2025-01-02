const express = require("express");
const router = express.Router();
const Marks = require('../Models/Marks');

router.get('/marks', async (res,req) => {
     const {studentId} = req.params;

     try {
         const marks = await Marks.find({studentId}).select('subject examType marks - _id')
             
            if (marks.length === 0){
                return res.status(404).json({ message:"No Marks found for You now! "})
            } 
            res.json(marks)  
        } catch (error) {
         console.error(error);
         res.status(500).json({message: "Error While Fetching marks"})
     }
});

module.exports = router;