const express = require("express");
const app = express();
const users = require("./connection")
app.use(express.json())
// post -  data send  to data base
// get - get the data from databese
// pacth update data data in databses
// delete - delete the data in database

app.post("/",async (req,res)=>{
    try {
        const senddata = users(req.body);
        const savedata = await senddata.save()
        res.send(savedata)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.get("/user",async (req,res)=>{
    try {
        const getdata = await users.find({})
        res.send(getdata)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(3000,()=>{
    console.log("server is running port 3000")
})