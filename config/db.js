const mongoose = require("mongoose")
const db = {}
db.url = process.env.URL
db.monggose = mongoose

module.exports = db