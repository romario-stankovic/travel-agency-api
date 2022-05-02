const router = require("express").Router();

const destinationService = require("../services/destination.service");
const reviewService = require("../services/review.service");
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
    let updateResponse = await reviewService.add(req.body.user_id, req.body.destination_id, req.body.score, req.body.text);
    if(updateResponse == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(updateResponse);
    }
});

module.exports.controller = router;