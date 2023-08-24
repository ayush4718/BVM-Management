require("dotenv").config()
const express = require("express")
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT;
const db = require('./config/db')
const routs = require("./routes/index");
app.use(bodyparser());
db.monggose.connect(db.url).then(()=>{
    console.log("MongodB ConnecteD")
})
.catch((error)=>{
    console.log("ErroR",error)
})
app.get("/", (req,res)=>{
    res.send("you are in beck end")
})
app.use(routs)

app.listen(port,()=>{
    console.log("ServeR StarT")
})