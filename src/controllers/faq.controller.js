const router = require("express").Router();

const motdService = require("../services/motd.service");
const faqService = require("../services/faq.service");

const apiResponse = require("../misc/api.response");

router.get("/faq/all/", async (req, res) => {
    let faq = await faqService.getAll();
    if(faq.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(faq);
    }
});

router.get("/faq/", async (req, res) => {
    let faq = await faqService.getById(req.query.id);
    if(faq == undefined){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(faq);
    }
});

router.post("/faq/", async(req, res) => {
    let faq = await faqService.add(req.body.question, req.body.answer);
    if(faq == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(faq);
    }
})

router.put("/faq/", async (req, res) => {
    let faq = await faqService.update(req.query.id, req.body.question, req.body.answer);
    if(faq == undefined){
        res.json(apiResponse.UPDATE_FAILED);
    }else{
        res.json(faq);
    }
})

router.delete("/faq/", async (req, res) => {
    let faq = await faqService.delete(req.query.id);
    if(faq == undefined){
        res.json(apiResponse.DELETE_FAILED);
    }else {
        res.json(faq);
    }
})

module.exports.controller = router;