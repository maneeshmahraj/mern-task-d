
import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
    const [mydata,setMydata]=useState([]);

    const loaddata=()=>{
     let api ="http://localhost:8000/stuinfo/display";
     axios.get(api).then((res)=>{
        setMydata(res.data);
        //console.log(mydata);
     })
    }
    useEffect(()=>{
        loaddata();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>

            </tr>
           
            </>
        )
    })
    return(
        <>
      <div className="data-show">
     <table  width="800" >
         <tr >
           <th>Student_Rollno</th>
           <th>Student_name</th>
           <th>Student_city</th>
           <th>Student_fees</th>
           

         </tr>
         {ans}
       </table>
     </div>

        </>
    )
}
export default Display;