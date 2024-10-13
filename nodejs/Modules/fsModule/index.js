const fs = require("fs") // write read update delete rename //
//non-Blocking io model async nich h
// fs.writeFile("file.txt","data added success",()=>{
//     console.log("data ab add ho rha hai ");
// })

// sync 
// const b = fs.writeFileSync("file2.txt","second added")
// console.log(b);
// console.log("data addedss");

// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

// fs.appendFile("file.txt","now data update",(err)=>{
//     console.log(err);
// })

// fs.rename("file.txt","newFile.txt",(err)=>{
//     console.log(err);
    
// })

// fs.unlinkSync("newFile.txt")