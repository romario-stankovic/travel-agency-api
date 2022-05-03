const mongoose = require("mongoose")

let schema = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    destinationId: mongoose.Types.ObjectId,
    score: Number,
    text: String
})

module.exports.schema = schema;