const express = require("express")
const app = express()
const Routes = require("./router")
const cookieParser = require("cookie-parser")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine","ejs")
const port = 3000
app.use(cookieParser());
app.use(Routes)

app.listen(port,()=>{
    console.log(`port running on ${port}`);
})