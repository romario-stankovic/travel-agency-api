const mongoose = require("mongoose");
const {schema} = require("../schemas/destination.schema");

const model = mongoose.model("destination", schema);

async function getTopRated(){
    let destinations = await model.find().sort({score: -1, ratings: -1}).limit(3);
    return destinations;
}

async function getById(id){
    if(!mongoose.isValidObjectId(id)){
        return undefined;
    }
    let destination = await model.findById(id);
    return destination;
}

async function addReview(id, score){
    let destination = await getById(id);
    if(destination == undefined){
        return undefined;
    }
    let oldScore = destination.score * destination.ratings;
    let newScore = (oldScore + score) / (destination.ratings + 1);
    destination.score = newScore;
    destination.ratings += 1;
    let updatedDestination = await model.updateOne({_id: id}, destination);
    return updatedDestination;
}

module.exports.getTopRated = getTopRated;
module.exports.getById = getById;
module.exports.addReview = addReview;