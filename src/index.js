const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const fileParser = multer({dest: "./public/uploads"});
const fs = require("fs");

const userController = require("./controllers/user.controller").controller;
const destinationController = require("./controllers/destination.controller").controller;
const faqController = require("./controllers/faq.controller").controller;
const motdController = require("./controllers/motd.controller").controller;
const bookingController = require("./controllers/booking.controller").controller;

const port = 4000;

async function main() {

    console.log("Connecting to MongoDB...");

    await mongoose.connect("mongodb://127.0.0.1:27017/globus");
    mongoose.set("autoCreate", false);

    if(!fs.existsSync("./public/images")) {
        fs.mkdirSync("./public/images", {recursive: true});
    }

    const app = express();
    app.use(cors());
    app.use(express.static(__dirname + "/../public/"));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(fileParser.any());

    app.use(userController);
    app.use(destinationController);
    app.use(faqController);
    app.use(motdController);
    app.use(bookingController);

    app.listen(port, () => {
        console.log(`Server running and listening on port: ${port}`);
    });

    /* Lazy error catching :) */
    process.on("uncaughtException", function(err){
        console.error(err);
    });

}

main();