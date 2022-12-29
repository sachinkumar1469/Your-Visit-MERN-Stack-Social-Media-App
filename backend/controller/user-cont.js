const { v4 } = require('uuid');

const {validationResult} = require('express-validator');
const HttpError = require("../model/http-error");

const userModel = require('../model/user-model');
const placeModel = require("../model/place-model");

exports.userMain = async (req,res,next)=>{
    userModel.find()
    .then(result=>{
        // console.log(result);
        let response = result.map((user)=>{
            return {
                id:user._id.toString(),
                name:user.name,
                imageUrl:user.imageUrl,
                totalPlaces:user.places.length,
                lastPlaceImageUrl:user.lastPlaceImageUrl
            }
        });
       
        response = response.filter(user=>{
            return user.totalPlaces > 0
        })
        
        res.json(response)
    })
    .catch(err=>{
        return next(new HttpError("Unable to find all users",302));
    })
}

exports.userLogin = (req,res,next)=>{
    const {email,password} = req.body;
    userModel.findOne({email,password})
    .then(result=>{
        const {name,imageUrl,_id} = result;
        const response = {
            name,
            imageUrl,
            id:_id
        }
        res.json(response);
    })
    .catch(err=>{
        return next(new HttpError("Unable to find user using email and password",302));
    })
}

exports.userSignup = (req,res,next)=>{
    const valErr = validationResult(req);
    if(!valErr.isEmpty()){
        throw new HttpError("Invalid input in signup",302);
    }
    
    const {name,email,password,imageUrl} = req.body;
    const newUser = new userModel({name,email,password,imageUrl,places:[],lastPlaceImageUrl:""});

    newUser.save().then(result=>{
        res.json(result);
    })
    .catch(err=>{
        console.log("Unable to create new user!");
        next(new HttpError("Unable to create new user",302))
    })
}

exports.getUserById = (req,res,next)=>{
    const {userId} = req.params;
    console.log(userId);
    userModel.findById({_id:userId})
    .then(result=>{
        const response = {
            name:result.name,
            imageUrl:result.imageUrl,
            totalPlaces:result.places.length
        }
        res.json(response)
    })
    .catch(err=>{
        return new HttpError("Unable to find user by given user id");
    })
}