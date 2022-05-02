const mongoose = require("mongoose")

let schema = mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    destination_id: mongoose.Types.ObjectId,
    score: Number,
    text: String
})

module.exports.schema = schema;