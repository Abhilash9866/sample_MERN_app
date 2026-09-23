let express=require('express');
let router=express.Router();
let{users}=require('../models/users');

router.get ("/employees",async(req,res)=>{
    let result=await users.find();
    result.password=undefined;
    res.send(result);
});
//open postman =>choose get method
//localhost:3000/api/hr/employees

router.post("/assign-task",(req,res)=>{
    res.send("assign task page called");
});
router.get("/tasks",(req,res)=>{
    res.send("tasks called");
});
router.get("/notifications",(req,res)=>{
    res.send("notifications called");
});

module.exports=router;