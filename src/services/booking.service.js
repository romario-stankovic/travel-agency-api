const mongoose = require("mongoose")
const {schema} = require("../schemas/booking.schema")

const model = mongoose.model("booking", schema);

async function getAll(){
    return await model.find();
}

async function getById(id){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findById(id);
}

async function add(userId, destinationId, start, end){
    return await model.create({
        userId: userId,
        destinationId: destinationId,
        start: start,
        end: end
    });
}

async function remove(id){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findByIdAndDelete(id);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.delete = remove;