const router = require("express").Router();
const fs = require("fs");

const destinationService = require("../services/destination.service");
const reviewService = require("../services/review.service");
const userService = require("../services/user.service");
const apiResponse = require("../misc/api.response");

router.get("/destination/topRated", async (req, res) => {
    let topDestinations = await destinationService.getTopRated();
    if(topDestinations.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(topDestinations);
    }
});

router.get("/destination/", async (req, res) => {
    let destination = await destinationService.getById(req.query.id);
    if(destination == undefined){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(destination);
    }
})

router.get("/destination/all", async (req, res) => {
    let destinations = await destinationService.getAll();
    if(destinations.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(destinations);
    }
})

router.post("/destination/filter", async (req, res) => {
    let destinations = await destinationService.filterDestinations(req.body.filters);
    if(destinations.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(destinations);
    }
})

router.post("/destination/", async (req, res) => {
    let normalizedName = req.body.name.toLowerCase().replace(" ", "_");
    
    let file = req.files[0];
    let filePath = "";
    if(file != undefined){
        let ext = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
        fs.rename(file.path, "./public/images/" + normalizedName + "_" + file.filename.substr(0, 10) + ext, (err) => {
            throw err;
        });
        filePath = "images/" + normalizedName + "_" + file.filename.substr(0, 10) + ext;
    }

    let categories = [];
    categories.push(normalizedName);
    categories.push(...req.body.categories.split(";"));

    let destination = await destinationService.add(req.body.name, req.body.description, filePath, categories);
    if(destination == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(destination);
    }
});

router.put("/destination/", async (req, res) => {
    let normalizedName = req.body.name.toLowerCase().replace(" ", "_");

    let file = req.files[0];
    let filePath = "";
    if(file != undefined){
        let ext = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
        fs.rename(file.path, "./public/images/" + normalizedName + "_" + file.filename.substr(0, 10) + ext, (err) => {
            throw err;
        });
        filePath = "images/" + normalizedName + "_" + file.filename.substr(0, 10) + ext;
    }

    let categories = [];
    categories.push(normalizedName);
    categories.push(...req.body.categories.split(";"));

    let destination = await destinationService.update(req.query.id, req.body.name, req.body.description, filePath, categories);
    if(destination == undefined){
        res.json(apiResponse.UPDATE_FAILED);
    }else{
        res.json(destination);
    }
});

router.delete("/destination/", async (req, res) => {
    let destination = await destinationService.delete(req.query.id);
    if(destination == undefined){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(destination);
    }
})

router.get("/destination/review", async (req, res) => {
    let reviews = await reviewService.getByDestinationId(req.query.id);
    if(reviews.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(reviews);
    }
})

router.post("/destination/review", async (req, res) => {
    let user = await userService.getById(req.body.userId);
    let destination = await destinationService.getById(req.body.destinationId);
    if(user == undefined || destination == undefined){
        res.json(apiResponse.CREATE_FAILED);
        return;
    }
    let review = await reviewService.add(req.body.userId, req.body.destinationId, req.body.score, req.body.text);
    if(review == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(review);
    }
});

module.exports.controller = router;