let express=require('express');
let router=express.Router();
let {users}=require('../models/users');

router.get("/employees",async (req,res)=>{
    let result=await users.find();
    result.password=undefined;
    res.send(result);
});

router.delete("/deleteemp/:id", async (req, res)=>{
    let result =await users.findByIdAndDelete(req.params.id);
    if (result){
        res.send("emp record deleted success");
    }
})
//open postman => choose get method
//localhost:3000/api/hr/employees
router.post("/assign-task",(req,res)=>{
    res.send("assign task page called")
});

module.exports=router;