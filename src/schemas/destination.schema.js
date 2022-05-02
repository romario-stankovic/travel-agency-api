const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    categories: [String]
})

module.exports.schema = schema;