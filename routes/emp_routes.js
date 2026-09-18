let express=require('express');
let router=express.Router();
router.post("/register",(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send(data);
    // res.send("register page called");
});
router.post("/login",(req,res)=>{
    res.send("login page called");
});
router.get("/viewtasks",(req,res)=>{
    res.send("view tasks page called");
});
router.get("/viewtodo",(req,res)=>{
    res.send("view todo page called");
});
router.patch("/updateprofile",(req,res)=>{
    res.send("update profile page called");
});

module.exports=router;