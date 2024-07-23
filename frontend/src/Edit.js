


import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
const Edit=()=>{

    const [mydata,setMydata]=useState({});
  
     const {id}=useParams();
    
   const loadData=()=>{
    let api="http://localhost:8000/stuinfo/dataedit";
    axios.post(api,{id:id}).then((res)=>{
        setMydata(res.data);
    })
   
   
   }
   useEffect(()=>{
    loadData();
},[])
    const handlInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
   setMydata(values=>({...values,[name]:value}));
     
    }
    const handlSubmit=()=>{
     let api="http://localhost:8000/stuinfo/edit";
     axios.post(api,mydata).then((res)=>{
        alert(res.data.msg);
       
     })
    
    }
   
    return(
        <>
        <div className="registration">
          <div className="registor">
            <h2 style={{display:"flex", justifyContent:"center"}}>Insert Student Details</h2>
          <label for="username">Enter name:</label>
          <input type="text" name="name" value={mydata.name} onChange={handlInput}/>
          <label for="rolenumber"> Enter rollnumber:</label>
          <input  type="text" name="rollno" value={mydata.rollno} onChange={handlInput}/>
          <label for="city">Enter City:</label>
          <input type="text" name="city" value={mydata.city} onChange={handlInput}/>
          <label for="fees">Enter fees:</label>
        
          <input type="text" name="fees" value={mydata.fees} onChange={handlInput} />
          
           <button className="datasave" onClick={handlSubmit}>Save</button>
          </div>
       </div>
        </>
    );
}
export default Edit;