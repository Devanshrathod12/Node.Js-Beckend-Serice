const mongoose = require("mongoose")//nodejsprojectSager
mongoose.connect("mongodb://127.0.0.1:27017/nodejsprojectSager").then(()=>{
    console.log("db connected succsesfull");
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
        required:true,
        unique:true
      },
      password:{
        type:String,
        required:true
      }
})

const usermodel = mongoose.model("userdetail",schema)
module.exports=usermodel