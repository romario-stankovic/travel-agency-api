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
            "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]},
            "categories": "$categories"
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
            "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]},
            "categories": "$categories"
        }}
    ]);
    return destination[0];
}

async function getAll(){
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
            "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]},
            "categories": "$categories"
        }}
    ])
    return destinations;
}

async function filter(filters){
    if(filters.length === 0){
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
                "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]},
                "categories": "$categories"
            }},
            {$limit: 10}
        ])
        return destinations;
    }

    let destinations = await model.aggregate([
        {$match: {categories: {$all: filters}}},
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
            "ratings": {$ifNull: [{$first: "$reviews.count"}, 0]},
            "categories": "$categories"
        }}
    ]);
    return destinations;
}

async function add(name, description, imageUrl, categories){
    return await model.create({
        name: name,
        description: description,
        imageUrl: imageUrl,
        categories: categories
    });
}

async function update(id, name, description, imageUrl, categories){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    let dest = await getById(id);
    return await model.findByIdAndUpdate(id, {
        name: name,
        description: description,
        imageUrl: imageUrl !== "" ? imageUrl : dest.imageUrl,
        categories: categories
    }, {new: true});
}

async function remove(id) {
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findByIdAndDelete(id);
}

module.exports.getTopRated = getTopRated;
module.exports.getById = getById;
module.exports.getAll = getAll;
module.exports.filterDestinations = filter;
module.exports.add = add;
module.exports.update = update;
module.exports.delete = remove;