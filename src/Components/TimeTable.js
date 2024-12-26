import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const TimeTable = () => {
 
    const [timetable,SetTimeTable] = useState([])

    useEffect(  () =>
        {
          fetchTimeTable();              
  
        },[]
    );
 
    const fetchTimeTable = async () =>{
       try {
          const response = await axios.get('http://localhost:5000/apiV1/timetable');
          SetTimeTable(response.data);
       } catch (error) {
        console.error(" Error fetching timetable", error);
       }

    };
 
    return (
    <div>TimeTable</div>
  )
}

export default TimeTable