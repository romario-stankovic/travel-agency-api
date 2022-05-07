const mongoose = require("mongoose");
const {schema} = require("../schemas/user.schema");

const model = mongoose.model("user", schema);

const crypto = require("crypto");

async function getById(id){
    if(!mongoose.isValidObjectId(id)){
        return undefined;
    }
    return await model.findById(id);
}

async function getByEmail(email){
    if(email === undefined){
        return;
    }
    return await model.findOne({email: email});
}

async function getAll(){
    return await model.find();
}

async function create(name, lastName, email, password){
    let user = await getByEmail(email);
    if(user != undefined){
        return null;
    }

    let hash = crypto.createHash("sha512");
    let hashedPassword = hash.update(password).digest("hex");
    let newUser = await model.create({
        name: name,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });
    return newUser;
}

async function update(id, name, lastName, email, password) {
    if(!mongoose.isValidObjectId(id)){
        return null;
    }

    let currentUser = await getById(id);
    let user = await getByEmail(email);

    if(user != undefined && user._id.toString() != currentUser._id.toString()){
        return null;
    }

    let hashedPassword;

    if(password === "" || password == undefined){
        hashedPassword = currentUser.password;
    }else{
        let hash = crypto.createHash("sha512");
        hashedPassword = hash.update(password).digest("hex");
    }

    return await model.findByIdAndUpdate(id, {
        name: name,
        lastName: lastName,
        email:email,
        password: hashedPassword
    }, {new: true});
}

async function remove(id){
    if(!mongoose.isValidObjectId(id)){
        return null;
    }
    return await model.findByIdAndDelete(id);
}

module.exports.getById = getById;
module.exports.getByEmail = getByEmail;
module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update
module.exports.delete = remove;