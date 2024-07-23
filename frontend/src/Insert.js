
import axios from "axios";
import React from 'react'
import { useState } from "react";
const Insert = () => {
    const [datainput,setDatainput]=useState({});

    const handlInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setDatainput(values=>({...values,[name]:value}));

    }
    const handlSubmit=()=>{
        let url="http://localhost:8000/stuinfo/insert";
        axios.post(url,datainput).then((res)=>{
            alert("data save !!")
        })
    }
  return (
    <>
    <div className="registration">
          <div className="registor">
            <h2 style={{display:"flex", justifyContent:"center"}}>Insert Student Details</h2>
          <label for="username">Enter name:</label>
          <input type="text" name="name" value={datainput.name} onChange={handlInput}/>
          <label for="rolenumber"> Enter rollnumber:</label>
          <input  type="text" name="rollno" value={datainput.rollno} onChange={handlInput}/>
          <label for="city">Enter City:</label>
          <input type="text" name="city" value={datainput.city} onChange={handlInput}/>
          <label for="fees">Enter fees:</label>
        
          <input type="text" name="fees" value={datainput.fees} onChange={handlInput} />
          
           <button className="datasave" onClick={handlSubmit}>Save</button>
          </div>
       </div>
       
    </>
  )
}

export default Insert