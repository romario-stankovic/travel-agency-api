const mongoose = require("mongoose")

let schema = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    destinationId: mongoose.Types.ObjectId,
    date: Date,
    days: Number
})

module.exports.schema = schema