import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration=()=>{
    const [mydata,setMydata]=useState({})
const navigate=useNavigate();
const handlinput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setMydata(values=>({...values,[name]:value}));

}
const handlSubmit=()=>{
  // console.log(mydata);
let api="http://localhost:8000/stuinfo/registration";
axios.post(api,mydata).then((res)=>{
    alert(res.data);
     navigate("/login")
})
}
    return(
        <>
       <div className="registration">
          <div className="registor">
            <h2 style={{display:"flex", justifyContent:"center"}}>Registration</h2>
          <label for="username">Enter username:</label>
          <input type="text"  name="username" onChange={handlinput}/>
          <label for="mobilenumber"> Mobile Number:</label>
          <input type="text"  name="mobilenumber" onChange={handlinput}/>
          <label for="email">Enter email:</label>
          <input type="email"  name="email" onChange={handlinput}/>
          <label for="password">Enter password:</label>
          <input type="password"  name="password" onChange={handlinput}/>
          
          <label for="role">Select Role:</label>
          <select name='role' onChange={handlinput} >
          <option  >role</option>

            <option value="student" >STUDENT</option>
            <option value="teacher" >TECHER</option>
            <option value="insititude" >INSITITUDE</option>
           

          </select>
           <button className="datasave" onClick={handlSubmit}>Registor</button>
          </div>
       </div>
      
        </>
    );
}
export default Registration;