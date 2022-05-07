const mongoose = require("mongoose");
const {schema} = require("../schemas/motd.schema");

const model = mongoose.model("motd", schema);

async function getRandom(){
    let motd = await model.aggregate( [{$sample: {size: 1}}]);
    if(motd.length === 1){
        return motd[0];
    }else{
        return null;
    }
}

async function getById(id){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findById(id);
}

async function getAll(){
    return await model.find();
}

async function add(message) {
    return await model.create({message: message});
}

async function update(id, message){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findByIdAndUpdate(id, {message: message}, {new: true});
}

async function remove(id){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findByIdAndDelete(id);
}

module.exports.getRandom = getRandom;
module.exports.getById = getById;
module.exports.getAll = getAll;
module.exports.add = add;
module.exports.update = update;
module.exports.delete = remove;