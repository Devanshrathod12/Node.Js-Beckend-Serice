const express = require("express")
const Routes = express.Router()
const user = require("./db")
const bcrypt = require("bcryptjs")

Routes.get("/",(req,res)=>{
    res.render("index")
})
Routes.get("/loginin",(req,res)=>{
    res.render("login")
})

Routes.post("/register",async(req,res)=>{
    try {
        const data = new user(req.body)
        if (data.password===data.confpassword) {
        const emailvalidation = await user.findOne({email:data.email})
        if (emailvalidation) {
            res.send("email alrady exist")
        }
         // token create
        const token = await data.genrateToken()
        console.log(token);
        res.cookie("jwt",token)
        const savedata = await data.save()
         res.render("login")
        }else{
            res.status(400).send("invalid creidiantial email")
        }
    } catch (error) {
        res.status(404).send(error)
    }
    
})

Routes.post("/login",async(req,res)=>{  // is match chacck krega compare(passwordusers jo user derha hai input me, database mea vaabal data chackrega databasedata.password) chacck krega
    try {
        const passwordusers = req.body.password;
        const checkemail = req.body.email;
        const databasedata = await user.findOne({email:checkemail})
        const ismatch = await bcrypt.compare(passwordusers,databasedata.password)
        if (ismatch) {   
            // token create login
            const token = await databasedata.genrateToken()
            res.cookie("jwt",token)
            res.render("contect")
        }else{
            res.status(400).send("invalid creidiantial email")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=Routes