const router = require("express").Router();

const motdService = require("../services/motd.service");

const apiResponse = require("../misc/api.response");

router.get("/motd/random/", async (req, res) => {
    let motd = await motdService.getRandom();
    if (motd == undefined) {
        res.json(apiResponse.NULL_ENTRY);
    } else {
        res.json(motd);
    }
});

router.get("/motd/", async (req, res) => {
    let motd = await motdService.getByID(req.query.id);
    if (motd == undefined) {
        res.json(apiResponse.NULL_ENTRY);
    } else {
        res.json(motd);
    }
});

router.get("/motd/all", async (req, res) => {
    let motds = await motdService.getAll();
    if(motds.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(motds);
    }
});

router.post("/motd/", async (req, res) => {
    let motd = await motdService.add(req.body.message);
    if (motd == undefined) {
        res.json(apiResponse.CREATE_FAILED);
    } else {
        res.json(motd);
    }
});

router.put("/motd/", async (req, res) => {
    let motd = await motdService.update(req.query.id, req.body.message);
    if (motd == undefined) {
        res.json(apiResponse.UPDATE_FAILED);
    } else {
        res.json(motd);
    }
});

router.delete("/motd/", async (req, res) => {
    let motd = await motdService.delete(req.query.id);
    if (motd == undefined) {
        res.json(apiResponse.DELETE_FAILED);
    } else {
        res.json(motd);
    }
});

module.exports.controller = router;