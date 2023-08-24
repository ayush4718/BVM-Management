const express = require("express")
const routs = express.Router();
const userController = require('../../controller/usercontroller')

routs.get("/", userController.getUser)
routs.post("/", userController.createUser)
// routs.delete("/deleteuser/:id", userController.DeleteById)


module.exports = routs;