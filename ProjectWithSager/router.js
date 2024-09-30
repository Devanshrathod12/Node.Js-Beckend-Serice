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
        res.send(savedata)
    } catch (error) {
        res.status(404).send(error)
    }
    
})
module.exports=Routes