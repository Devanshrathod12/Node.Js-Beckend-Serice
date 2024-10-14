const express = require("express")
const app = express();
const cors = require("cors")
const User = require("./db")
app.use(express.json())
app.use(cors());

// home page routes
app.get("/",(req,res)=>{
    res.send("api working now")
    
})

// post the  data in data base

app.post("/post",async(req,res)=>{
   try {
      const data = new User(req.body);
      const save = await data.save()
      res.send(save)
   } catch (error) {
       res.send(error)
   }
})

// get all the data from the data base
app.get("/get",async(req,res)=>{
    try {
        const finddata = await User.find({})
        console.log(finddata);
        res.send(finddata)
    } catch (error) {
        res.send(error)
    }
})

//put update route the data in the data base
app.put("/update/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const update = await User.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.send(update)
    } catch (error) {
        res.send(error)
    }
})

// delete data to the db 
app.delete("/delete/:id",async(req,res)=>{
    try {
        const deletedata = await User.findByIdAndDelete(req.params.id)
        res.send(deletedata)
    }catch (error) {
        res.send(error)
    }
})

app.listen(3000,()=>{
    console.log("server run on port no 3000")
})

