
var express=require("express");
var router=express.Router();
const stuController=require("../controllers/studentController");
const regitController=require("../controllers/registrationController")
const appController=require("../controllers/appoionController")
router.post("/insert",stuController.stuRecSave);
router.get("/display",stuController.stuDisplay);
router.get("/dataupdate",stuController.dataUpdate);
router.post("/datadelete",stuController.detaDelete);
router.post("/dataedit",stuController.detaEdit);
router.post("/dataedit",stuController.detaEdit);
router.post("/edit",stuController.Edit);
router.post("/stusearch",stuController.searchData)
router.post("/registration",regitController.registrationData)
router.post("/login",regitController.loginData);
router.post("/studata",appController.studentData)
router.get("/getdata",appController.displayData);
router.post("/access",appController.statusData)
module.exports=router;