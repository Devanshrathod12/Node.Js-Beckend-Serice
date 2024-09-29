const express = require("express")
const path = require("path");
const { title } = require("process");
const app = express();

// const pathdir = path.join(__dirname,"public")
// app.use(express.static(pathdir)) 

app.set("view engine","ejs")



app.get("/",(req,res)=>{
   // res.sendFile(`${pathdir}/Home.html`)
   res.render("inde",{
      title:"index"
   })
})
app.get("/about",(req,res)=>{
   //res.sendFile(`${pathdir}/inde.html`)
   res.render("Home",{
      title:"home"
   })
})

app.get("/about",(req,res)=>{
   res.send("hy this is my  frist express about route")
})
app.get("/download",(req,res)=>{
   res.download(`${pathdir}/inde.html`)
})

app.listen(3000,()=>{
    console.log("connection stablised");
    
})