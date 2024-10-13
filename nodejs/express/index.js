const express = require("express")
const path = require("path");
const { title } = require("process");
const app = express();
const Router = require("./router");
// const pathdir = path.join(__dirname,"public")
// app.use(express.static(pathdir)) 
app.set("view engine","ejs")
app.use(Router)
app.listen(3000,()=>{
    console.log("connection stablised"); 
})