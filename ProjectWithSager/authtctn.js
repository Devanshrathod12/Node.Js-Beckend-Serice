const jwt = require("jsonwebtoken")
const usermodel = require("./db")

const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        const verify = jwt.verify(token,"qoiwnerscmwmlsvdblkhrtijfkbnrhtirhbrmbjkkbmfkghjoibjpeohryjbrwjgbmbkvghbo")
        console.log(verify);
        const user = await usermodel.findOne({_id:verify._id})
        console.log(user);
        req.token = token;
        req.user = user
        
        next()
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = auth