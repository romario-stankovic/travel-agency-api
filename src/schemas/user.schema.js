const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String
})

module.exports.schema = schema;