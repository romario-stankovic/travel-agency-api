const mongoose = require("mongoose");

let schema = mongoose.Schema({
    question: String,
    answer: String,
});

module.exports.schema = schema;