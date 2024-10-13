function agedetector(req,res,next){  
if (req.query.age>18) {
    res.send("you are elegibal for vote")
    next()
}
else{
    res.send("u are not elegibal")
}
}
module.exports=agedetector;


// next not coll to page are not full filedthe middelware and page continuesly reload becouse dsta not send