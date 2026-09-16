let express=require('express');
let hr_routes=require('./routes/hr_routes');
let app=express();

app.use("/api/hr",hr_routes);

//run the server in port 3000
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});