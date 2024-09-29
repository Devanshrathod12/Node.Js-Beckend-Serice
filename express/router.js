const express = require("express")
const Router = express.Router();
const middleware = require("./middleware")

//Router.use(middleware)
Router.get("/",middleware,(req,res)=>{
    // res.sendFile(`${pathdir}/Home.html`)
    res.render("inde",{
       title:"index"
    })
 })
 Router.get("/about",(req,res)=>{
    //res.sendFile(`${pathdir}/inde.html`)
    res.render("Home",{
       title:"home"
    })
 })
 
 Router.get("/about",(req,res)=>{
    res.send("hy this is my  frist express about route")
 })
 Router.get("/download",(req,res)=>{
    res.download(`${pathdir}/inde.html`)
 })
module.exports=Router 