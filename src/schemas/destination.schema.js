const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    score: Number,
    ratings: Number,
    categories: [String]
})

module.exports.schema = schema;