
import axios from 'axios';
import { useState, useEffect  } from 'react'
import { isAuthenticated} from './utils/auth';
import { Navigate } from 'react-router-dom';
const Teacher = () => {
    
  
  const [info,setInfo]=useState([])
const loadData=()=>{
let api="http://localhost:8000/stuinfo/getdata";
axios.get(api).then((res)=>{
  setInfo(res.data);

})
}
 
useEffect(()=>{
    loadData();
},[])
const confirmHandle=(id)=>{
    let api="http://localhost:8000/stuinfo/access";
    axios.post(api,{id:id}).then((res)=>{
     alert(res.data);
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
     <td> <button className='btn-confirm' onClick={()=>{confirmHandle(key._id)}}>Confirm</button></td>
       
    </tr>
    </>
  )
})
if (!isAuthenticated()) {
  return <Navigate to="/login" />;
}
  return (
   <>
   <div className="data-show" style={{marginTop:"100px"}} >
    <h2 className='heading-teacher'>Teacher deshbord</h2>
     <table  width="800" >
         <tr >
           <th>Teacher_name</th>
           <th>Date</th>
           <th>Time</th>
           <th>Student_Name</th>
           <th>Confirm</th>
         </tr>
         {ans}
       </table>
     </div>
   </>
  )
}

export default Teacher;