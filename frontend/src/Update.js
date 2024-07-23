
import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Update=()=>{

   const [mydata,setMydata]=useState([]);
    const nevigate=useNavigate();
  
const loadData=()=>{
    let api="http://localhost:8000/stuinfo/dataupdate";
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
 },[]);
       
 const detaDelete=(myid)=>{
  axios.post("http://localhost:8000/stuinfo/datadelete",{id:myid}).then((res)=>{
    alert(res.data.msg);
    loadData();
  })
  
 }
 const detaEdit=(myid)=>{
  axios.post("http://localhost:8000/stuinfo/dataedit",{id:myid}).then((res)=>{
;
   nevigate(`/edit/`+myid);
   })
  
    
  
 }
       const ans=mydata.map((key)=>{
         return(
            <>
            <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
           <td width={200}>
           <MdOutlineEdit className="del" onClick={(e)=>{detaEdit(key._id)}}/>
           </td>
           <td width={200}>
          <MdDeleteOutline className="del" onClick={(e)=>{detaDelete(key._id)}} />
           </td>
          </tr>
          <tr>
       
        </tr>
            </>
         );      
       })
    return(
        <>
        <div className="data-show">
     <table  width="800">
         <tr >
           <th>Student_Rollno</th>
           <th>Student_name</th>
           <th>Student_city</th>
           <th>Student_fees</th>
            <th>Edit</th>
            <th>Delete</th>

         </tr>
         {ans}
       </table>
     </div>

       
        </>
    );
}
export default Update;