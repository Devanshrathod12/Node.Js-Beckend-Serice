const express = require("express");
const app = express();
const users = require("./connection");
const { get } = require("mongoose");
app.use(express.json())
// post -  data send  to data base
// get - get the data from databese
// pacth update data data in databses
// delete - delete the data in database

app.post("/",async (req,res)=>{
    try {
        const senddata = users(req.body);
        const savedata = await senddata.save() // save method to data save in data base
        res.send(savedata)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.get("/user",async (req,res)=>{
    try {
        const getdata = await users.find({}) // {} all database data give in include i {} empty object
        res.send(getdata)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.get("/user/:id",async (req,res)=>{
    try {
        const id = req.params.id // params help to give your id you give /66f991e93506eb9882568228 and we show data 
        const getd = await users.findById({_id:id})  // _id databases and id you give him
        res.send(getd)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(3000,()=>{
    console.log("server is running port 3000")
})