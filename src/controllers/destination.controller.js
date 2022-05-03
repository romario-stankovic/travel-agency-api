const router = require("express").Router();

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