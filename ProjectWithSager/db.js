const mongoose = require("mongoose")//nodejsprojectSager
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
mongoose.connect("mongodb://127.0.0.1:27017/nodejsprojectSager").then(()=>{
    console.log("db connected succsesfull");
}).catch((e)=>{
    console.log(e);
    
})

// incrept hello ko nknou language me convert krta h loki => 12ergdfgaa
// decript ye incrept languAGE LIKE => 12ergdfgaa convert => hello 

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
      },
      confpassword:{
        type:String,
        required:true
      },
    tokens:[{
        token:{
          type:String,
          required:true
        }
    }]
})

// pre phle  db conept pre function leta h
//{ name: string; email: string; phone: number; password: string; 
//confpassword: string; }>>
//
// & > users data jo wo input fill krega
//
// jisme users ka data strore hoga
//
//mongoose.FlatRecord<{ name: string; email: string; phone: number;
// password: string; confpassword: string; }> 
//& { ...; } & { ...; }>):


//**   this currunt context ko refer k =rta hai esme cunt contxt schema h */
schema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10)
    next()
})

schema.methods.genrateToken= async function(){
  try {
    const tokenuser = jwt.sign({_id:this._id.toString()},"qoiwnerscmwmlsvdblkhrtijfkbnrhtirhbrmbjkkbmfkghjoibjpeohryjbrwjgbmbkvghbo")
    this.tokens = this.tokens.concat({token:tokenuser})
    await this.save();
    return tokenuser
    
  } catch (error) {
    
  }
}

const usermodel = mongoose.model("userdetail",schema)
module.exports=usermodel