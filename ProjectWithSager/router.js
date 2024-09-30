const express = require("express")
const Routes = express.Router()
const user = require("./db")

Routes.get("/",(req,res)=>{
    res.render("index")
})

Routes.post("/register",async(req,res)=>{
    try {
        const data = new user(req.body)
        const savedata = await data.save()
        res.render("login")
    } catch (error) {
        res.status(404).send(error)
    }
    
})

Routes.post("/login",async(req,res)=>{
    try {
        const checkemail = req.body.email;
        const databasedata = await user.findOne({email:checkemail})
        if (databasedata!=null) {   
            res.send(databasedata)
        }else{
            res.status(400).send("invalid creidiantial email")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=Routes