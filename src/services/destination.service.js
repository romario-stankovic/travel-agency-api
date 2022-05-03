const mongoose = require("mongoose");
const {schema} = require("../schemas/destination.schema");

const model = mongoose.model("destination", schema);

async function getTopRated(){
    let destinations = await model.aggregate([
        {$lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "destinationId",
            as: "reviews",
            pipeline:[
                {$group: {
                    "_id": "temp",
                    "count": {$count: {}},
                    "avg": {$avg:"$score"}
                }}
            ]
        }},
        {$project: {
            "_id": "$_id",
            "name": "$name",
            "description": "$description",
            "imageUrl": "$imageUrl",
            "score": {$ifNull: [{$first: "$reviews.avg"}, 0]},
            "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]}
        }},
        {$sort: {score: -1, ratings: -1}},
        {$limit: 3}
    ]);
    return destinations;
}

async function getById(id){
    if(!mongoose.isValidObjectId(id)){
        return undefined;
    }
    /* let destination = await model.findById(id); */
    let destination = await model.aggregate([
        {$match: {_id: mongoose.Types.ObjectId(id)}},
        {$lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "destinationId",
            as: "reviews",
            pipeline:[
                {$group: {
                    "_id": "temp",
                    "count": {$count: {}},
                    "avg": {$avg:"$score"}
                }}
            ]
        }},
        {$project: {
            "_id": "$_id",
            "name": "$name",
            "description": "$description",
            "imageUrl": "$imageUrl",
            "score": {$ifNull: [{$first: "$reviews.avg"}, 0]},
            "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]}
        }}
    ]);
    return destination[0];
}

module.exports.getTopRated = getTopRated;
module.exports.getById = getById;