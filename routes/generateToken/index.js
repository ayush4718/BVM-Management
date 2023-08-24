const express = require('express')
const routs = express.Router()
const userToken = require('../../controller/usercontroller')

routs.post("/GenerateToken", userToken.GenerateToken)
routs.get("/VerifyToken", userToken.VerifyToken)

module.exports = routs;