const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userController = require("./controllers/user.controller").controller;
const destinationController = require("./controllers/destination.controller").controller;
const faqController = require("./controllers/faq.controller").controller;
const motdController = require("./controllers/motd.controller").controller;

const port = 4000;

async function main() {

    console.log("Connecting to MongoDB...");

    await mongoose.connect("mongodb://127.0.0.1:27017/globus");
    mongoose.set("autoCreate", false);

    const app = express();
    app.use(cors());
    app.use(express.static(__dirname + "/../public/"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(userController);
    app.use(destinationController);
    app.use(faqController);
    app.use(motdController);

    app.listen(port, () => {
        console.log(`Server running and listening on port: ${port}`);
    });

    /* Lazy error catching :) */
    process.on("uncaughtException", function(err){
        console.error(err);
    });

}

main();