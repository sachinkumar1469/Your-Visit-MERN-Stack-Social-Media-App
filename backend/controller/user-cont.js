const { v4 } = require('uuid');
const USERS = require('../model/user-model');
const {validationResult} = require('express-validator');
const HttpError = require("../model/http-error");

exports.userMain = (req,res,next)=>{
    res.json(USERS)
}

exports.userLogin = (req,res,next)=>{
    const {email,password} = req.body;
    res.json({"Login":"Yes"})
}

exports.userSignup = (req,res,next)=>{
    const valErr = validationResult(req);
    if(!valErr.isEmpty()){
        throw new HttpError("Invalid input in signup",302);
    }
    
    const {name,email,password,imageUrl,lastPlaceImageUrl,placeCount} = req.body;
    const newUser = {
        userId:v4(),
        name,
        imageUrl,
        lastPlaceImageUrl,
        placeCount:placeCount || "0"
    }

    res.json(newUser);
}