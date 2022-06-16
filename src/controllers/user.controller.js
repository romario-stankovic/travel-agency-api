const router = require("express").Router();

const userService = require("../services/user.service");
const apiResponse = require("../misc/api.response");
const crypto = require("crypto");

router.get("/user/", async (req, res) => {
    let user = await userService.getById(req.query.id);
    if(user == undefined){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(user);
    }
})

router.get("/user/all", async (req, res) => {
    let users = await userService.getAll();
    if(users.length === 0){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        res.json(users);
    }
})

router.post("/user/", async(req, res) => {
    let user = await userService.getByEmail(req.body.email);
    if(user != undefined) {
        res.json(apiResponse.USER_EXISTS);
        return;
    }
    let newUser = await userService.create(req.body.name, req.body.lastName, req.body.email, req.body.password);
    if(newUser == undefined){
        res.json(apiResponse.CREATE_FAILED);
    }else{
        res.json(newUser);
    }
});

router.put("/user/", async(req, res) => {
    let user = await userService.update(req.query.id, req.body.name, req.body.lastName, req.body.email, req.body.password);
    if(user == undefined){
        res.json(apiResponse.UPDATE_FAILED);
    }else{
        res.json(user);
    }
})

router.delete("/user/", async(req, res) => {
    let user = await userService.delete(req.query.id);
    if(user == undefined){
        res.json(apiResponse.DELETE_FAILED);
    }else {
        res.json(user);
    }
})

router.post("/user/login", async (req, res) => {
    let user = await userService.getByEmail(req.body.email);
    if(user == undefined){
        res.json(apiResponse.NULL_ENTRY);
    }else{
        let hash = crypto.createHash("sha512");
        let hashedPassword = hash.update(req.body.password).digest("hex");
        if(user.password === hashedPassword){
            res.json(user);
        }else{
            res.json(apiResponse.PASSWORD_MISMATCH);
        }
    }
})

module.exports.controller = router;