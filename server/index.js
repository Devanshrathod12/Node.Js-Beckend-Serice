const http = require("http")
const server = http.createServer((req,res)=>{

    if (req.url=="/") {
        res.end("hy this is my first beckend server")
    } else if (req.url === "/download") {
        res.end("hy this is my first download page ")
    }else{
        res.end("404 page could not found")
    }
})

server.listen(3000,()=>{
    console.log("server listnning on port 3000");
})