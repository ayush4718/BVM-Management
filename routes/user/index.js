const express = require("express")
const routs = express.Router();
const userController = require('../../controller/usercontroller')

routs.get("/", userController.getUser)
routs.post("/", userController.createUser)
routs.delete("/:id", userController.DeleteById)
routs.post("/update", userController.updateDataById)


module.exports = routs;