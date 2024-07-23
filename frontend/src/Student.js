import axios from 'axios';
import { useState } from 'react'
import { isAuthenticated} from './utils/auth';
import { Navigate } from 'react-router-dom';
const Student = () => {
 
  const [mydata,setMydata]=useState({});
    const [info,setInfo]=useState([]);
  const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
  }
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  const handlSubmit=()=>{
     let api="http://localhost:8000/stuinfo/studata";
     axios.post(api,mydata).then((res)=>{
      alert(res.data);
      loadData()

     })
  }
  
const loadData=()=>{
  let api="http://localhost:8000/stuinfo/getdata";
  axios.get(api).then((res)=>{
    setInfo(res.data);
     
  })
}

const ans=info.map((key)=>{

    return(
      <>
     <tr>
        <td>{key.teacher}</td>
        <td>{key.date}</td>
        <td>{key.time}</td>
        <td>{key.name}</td>
       <td> {key.status?<span style={{color:"green"}}>meeting fix</span>:<span style={{color:"orange"}}>pandding</span>}</td>
         
      </tr>
      </>
    )
  })
  
  return (

    <>
    <div className="registration">
    <div className="registor">
      <h2 style={{display:"flex", justifyContent:"center"}}> appointment </h2>
    
    
    <label for="teacher">Select Teacher:</label>
    <select name='teacher' onChange={handlInput} >
      <option value="ajay sir" >AJAY SIR</option>
      <option value="vikash sir" >VIKASH SIR</option>
      <option value="deepak sir" >DEEPAK SIR</option>
      <option value="neeraj sir" >NEERAJ SIR</option>
      <option value="rajesh sir" >RAJESH SIR</option>
     
    </select>
    <label for="date">Select Date:</label>
    <input type='date' name='date' onChange={handlInput}/>
    <label for="teacher">Enter Time:</label>
    <input type='text' name='time' onChange={handlInput}/>
    <label for="teacher">Enter name:</label>
   <input name='stuname'  onChange={handlInput} />
     <button className="datasave" onClick={handlSubmit}>appointment</button>
    </div>
 </div>
 <div className="data-show" style={{marginTop:"200px"}}>
<table  width="800">
   <tr >
     <th>Teacher_name</th>
     <th>Date</th>
     <th>Time</th>
     <th>student_name</th>
     <th>Status</th>
   </tr>
   {ans}
 </table>
</div>
     
    </>

  )
}

export default Student;