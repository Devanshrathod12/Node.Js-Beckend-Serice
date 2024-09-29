const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BackendWithSager").then(()=>{
    console.log("Db connect");
}).catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema({
    name:String
})

const users =  mongoose.model("users",schema)
module.exports=users