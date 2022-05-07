const mongoose = require("mongoose")

let schema = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    destinationId: mongoose.Types.ObjectId,
    start: Date,
    end: Date
})

module.exports.schema = schema