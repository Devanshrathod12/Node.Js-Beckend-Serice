const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BackendWithSager").then(()=>{
    console.log("Db connect");
}).catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confPassword:{
        type:String,
        required:true
    }
})

const users =  mongoose.model("users",schema)
module.exports=users

// url db compass in local machine mongodb://127.0.0.1:27017/ 
// {BackendWithSager}  actual db name