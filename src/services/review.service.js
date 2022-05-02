const mongoose = require("mongoose")
const {schema} = require("../schemas/review.schema");

const model = mongoose.model("review", schema);

async function getByDestinationId (id) {
    if(!mongoose.isValidObjectId(id)){
        return [];
    }
    return await model.aggregate([
        {$match: {"_id": mongoose.Types.ObjectId(id)}},
        {$lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "from"
        }},
        {$project: {
            "_id": "$_id",
            "from": {$first: "$from"},
            "destination_id": "$destination_id",
            "score": "$score",
            "text": "$text"
        }}
    ])
}

async function add(user_id, destination_id, score, text){
    if(!mongoose.isObjectIdOrHexString(user_id)){
        return null;
    }
    if(!mongoose.isObjectIdOrHexString(destination_id)){
        return null;
    }

    return await model.create({
        user_id: user_id,
        destination_id: destination_id,
        score: score,
        text: text
    });

}

module.exports.getByDestinationId = getByDestinationId;
module.exports.add = add;