const express = require("express")

const app = express();

app.get("/",(req,res)=>{
   res.send("hy this is my  frist express route")
})
app.get("/about",(req,res)=>{
   res.send("hy this is my  frist express about route")
})
app.get("/download",(req,res)=>{
   res.send("download route")
})

app.listen(3000,()=>{
    console.log("connection stablised");
    
})