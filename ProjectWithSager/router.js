const express = require("express")
const Routes = express.Router()
const user = require("./db")
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser")

const auth = require("./authtctn")
// this is mhome pahe route
Routes.get("/",(req,res)=>{
    res.render("index")
})
// this is login page using namvbar
Routes.get("/loginin",(req,res)=>{
     res.render("login")
    
})
// this is authorization page
Routes.get("/auth",auth,(req,res)=>{
    res.render("auth")
})

// this is user registation page
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
// this is user login page 
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

// logut using navbar 
Routes.get("/logout",auth,async(req,res)=>{
    try {
        
    req.user.tokens=[];
    res.clearCookie("jwt");
    await req.user.save()
    res.render("login");

    } catch (error) {
        res.status(404).send(error)
    }
})

// expoert to imprt data in express 
module.exports=Routes