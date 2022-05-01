const mongoose = require("mongoose");
const {schema} = require("../schemas/faq.schema");

const model = mongoose.model("faq", schema);

async function getAll() {
    return await model.find();
}

async function getById(id){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findById(id);
}

async function add(question, answer){
    return await model.create({question: question, answer: answer});
}

async function update(id, question, answer) {
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findByIdAndUpdate(id, {question: question, answer: answer}, {new: true});
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
module.exports.update = update;
module.exports.delete = remove;