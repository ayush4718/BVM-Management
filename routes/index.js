const express = require("express")
const routs = express.Router();
const user = require('./user/index')
routs.use("/user",user)


module.exports = routs;