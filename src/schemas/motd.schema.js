const mongoose = require("mongoose");

let schema = mongoose.Schema({
    message: String
});

module.exports.schema = schema;