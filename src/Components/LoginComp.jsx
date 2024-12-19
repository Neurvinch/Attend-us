import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const LoginComp = () => {

    const[rollNo,setRollNo] = useState(0)
    const [dob,setDob]  = useState('');
    const [error,setError] = useState('');
    const[sucess,setSucess] = useState('');
          
    const handleLogin = async (e) =>{
        e.preventDefault();
        try {
         const response = await axios.post("http://localhost:5000/apiV1/student/login",{rollNo,dob})
            localStorage.setItem('token', response.data.token);
            alert('You Can Go Ahead!')
        } catch (error) {
            setError("Invalid credentials");
        }
    };
  return (



    <div>
        <form onSubmit={handleLogin}>
            <input
              type = "number"
              placeholder='Roll number'
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
            
            
            <input
            type = 'date'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
          {error && <p> {error}</p>}
         

        
        
        </div>
  )
}

export default LoginComp

// login where ppl come and
// and eneter the credentials to login 
// and will route them to thier specified things
