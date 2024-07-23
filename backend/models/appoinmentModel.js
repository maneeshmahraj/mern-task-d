const mongoose=require("mongoose");

const appSchema=new mongoose.Schema({
      teacher:{
        type:String,
        required:true
      },
      date:{
        type:String,
        required:true
      },
      time:{
        type:String,
        required:true
      },
      name:{
        type:String,
        required:true
      },
      status:Boolean
})
module.exports=mongoose.model("appoinment",appSchema)