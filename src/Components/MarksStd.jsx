import React,{useState,useEffect} from 'react'
import axios from 'axios';
const MarksStd = () => {

    const [marks,setmarks] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        
        const fetchedData = async () =>{

            const marks = await axios.post

     }},[])
   
    
    return (
    <div>MarksStd</div>
  )
}

export default MarksStd
