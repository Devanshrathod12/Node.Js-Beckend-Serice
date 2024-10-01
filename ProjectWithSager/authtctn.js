const jwt = require("jsonwebtoken")
const usermodel = require("./db")

const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        const verify = jwt.verify(token,"qoiwnerscmwmlsvdblkhrtijfkbnrhtirhbrmbjkkbmfkghjoibjpeohryjbrwjgbmbkvghbo")
        console.log(verify);
        next()
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = auth