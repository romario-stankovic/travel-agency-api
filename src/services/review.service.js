const mongoose = require("mongoose")
const {schema} = require("../schemas/review.schema");

const model = mongoose.model("review", schema);

async function getByDestinationId (id) {
    if(!mongoose.isValidObjectId(id)){
        return [];
    }
    return await model.aggregate([
        {$match: {"destinationId": mongoose.Types.ObjectId(id)}},
        {$lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "from"
        }},
        {$project: {
            "_id": "$_id",
            "from": {$first: "$from"},
            "destinationId": "$destinationId",
            "score": "$score",
            "text": "$text"
        }},
        {$sort: {_id: -1}}
    ])
}

async function add(userId, destinationId, score, text){
    if(!mongoose.isObjectIdOrHexString(userId)){
        return null;
    }
    if(!mongoose.isObjectIdOrHexString(destinationId)){
        return null;
    }
    
    return await model.create({
        userId: userId,
        destinationId: destinationId,
        score: score,
        text: text
    });

}

module.exports.getByDestinationId = getByDestinationId;
module.exports.add = add;