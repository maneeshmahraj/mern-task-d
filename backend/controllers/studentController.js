
const stuModel= require("../models/studentModel");



const stuRecSave=async(req, res)=>{
   const myData= new stuModel(req.body)   
     myData.save().then((data)=>{
        res.json({msg:"data save!!!"});
     })
}
const stuDisplay=async(req, res)=>{
   stuModel.find().then((data)=>{
       res.json(data);
   });
}
 const dataUpdate=async(req,res)=>{
    stuModel.find().then((mydata)=>{
        res.json(mydata);
    })
 }
 const detaDelete=async(req,res)=>{
   try {
      let id=req.body.id;
      stuModel.findByIdAndDelete(id).then((data)=>{
         res.json({msg:"data successfully deleted!!"});
      })
   } catch (error) {
      console.log("error")
   }
 }
 const detaEdit=async(req,res)=>{
   try {
      let id=req.body.id;
      stuModel.findById(id).then((data)=>{
         res.json(data);
      })
   } catch (error) {
      console.log("error")
   }
 }
 const Edit=async(req,res)=>{
   try {
      let myid=req.body._id;
      let rollno=req.body.rollno;
      let name=req.body.name;
      let city=req.body.city;
      let fees=req.body.fees;
    
      stuModel.findByIdAndUpdate(myid, {rollno, name, city, fees}).then((data)=>{
         res.json({msg:"data successfully update!!!"});
      })
   } catch (error) {
      console.log("error")
   }
 }
 const searchData=async(req,res)=>{
   try {
      const rollno=req.body;
      stuModel.find(rollno).then((data)=>{
        res.json(data);
      })
      
   } catch (error) {
      console.log("error")
   }
 } 
module.exports={
    stuRecSave,
    stuDisplay,
    dataUpdate,
    detaDelete,
    detaEdit,
    Edit,
    searchData
}