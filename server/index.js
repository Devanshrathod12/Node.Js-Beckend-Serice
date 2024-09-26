const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
   const jsondata = fs.readFileSync("api.json","utf-8")
     const objdata = JSON.parse(jsondata)
    if (req.url=="/") {
        res.end("hy this is my first beckend server")
    } else if (req.url === "/download") {
        res.end("hy this is my first download page ")
    }else if (req.url === "/about") {
        res.end(objdata[0].name)
    }
    else{
        res.end("404 page could not found")
    }
})

server.listen(3000,()=>{
    console.log("server listnning on port 3000");
})