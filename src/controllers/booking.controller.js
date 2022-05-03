const router = require("express").Router();

const bookingService = require("../services/booking.service");
const userService = require("../services/user.service");
const destinationService = require("../services/destination.service");
const apiResponse = require("../misc/api.response");

router.get("/booking/all", async (req, res) => {
    let bookings = await bookingService.getAll();
    if(bookings.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(bookings);
    }
});

router.get("/booking/", async (req, res) => {
    let booking = await bookingService.getById(req.query.id);
    if(booking == undefined){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(booking);
    }
})

router.post("/booking/", async (req, res) => {
    let user = await userService.getById(req.body.userId);
    let destination = await destinationService.getById(req.body.destinationId);
    if(user == undefined || destination == undefined){
        res.json(apiResponse.CREATE_FAILED);
        return;
    }
    let booking = await bookingService.add(req.body.userId, req.body.destinationId, req.body.date, req.body.days);
    if(booking == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(booking);
    }
})

router.delete("/booking/", async (req, res) => {
    let booking = await bookingService.delete(req.query.id);
    if(booking == undefined){
        res.json(apiResponse.DELETE_FAILED);
    }else{
        res.json(booking);
    }
});

module.exports.controller = router;