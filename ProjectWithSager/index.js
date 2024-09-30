const express = require("express")
const app = express()
const user = require("./db")
const port = 3000

app.get("/",(req,res)=>{
    res.send("first routes")
})

app.listen(port,()=>{
    console.log(`port running on ${port}`);
})