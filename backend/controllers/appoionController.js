

const appModel=require("../models/appoinmentModel")


const studentData=async(req,res)=>{
    try {
        const {teacher,date,time,stuname}=req.body
       const student=await appModel.create({
        teacher:teacher,
        date:date,
        time:time,
        name:stuname,
         status:false
       })
    //   console.log(student)
       res.status(201).json("data insert in backend..")
    } catch (error) {
       console.error("somthing wrong..",error) 
    }
}

const displayData=async(req,res)=>{
    try {
       
        await appModel.find().then((data)=>{
       res.status(201).json(data);

        })
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
const statusData=async(req,res)=>{
    try {
        let Id=req.body.id
        // console.log(id);
        const responce=await appModel.findByIdAndUpdate(Id,{status:true});
        res.status(201).json(responce.status)
      
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
module.exports={
    studentData,
    displayData,
    statusData
}