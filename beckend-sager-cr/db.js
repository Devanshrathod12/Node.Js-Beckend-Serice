const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudoprationsager").then(()=>{
    console.log("database connect sucsesfully");
}).catch((err)=>{
    console.log(err);
})

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const User = mongoose.model("User",Schema)

module.exports = User