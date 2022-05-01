const router = require("express").Router();

const destinationService = require("../services/destination.service");
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

router.post("/destination/review", async (req, res) => {
    let updateResponse = await destinationService.addReview(req.query.id, req.body.score);
    if(updateResponse == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(apiResponse.OK);
    }
});

module.exports.controller = router;