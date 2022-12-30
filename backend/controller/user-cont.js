const { v4 } = require('uuid');

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');

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
    userModel.findOne({email})
    .then(result=>{
        const oldPass = result.password;
        const userId = result._id;
        bcrypt.compare(password,oldPass)
        .then(isTrue=>{
            if(!isTrue){
                return next(new HttpError("Password mismatch!"))
            }
            const {name,imageUrl,_id} = result;
            const response = {
                name,
                imageUrl,
                id:_id
            }
            let token;
            try{
                token = jwt.sign({userId:userId,email},'supersecretdontshare',{expiresIn:'1h'})
            } catch(err){
                return next(err);
            }
            response.token = token;
            
            res.json(response);
        })
        .catch(err=>{
            console.log("Unbale to compare password in login")
        })
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

    const imageUrl = `http://localhost:8081/images/${req.file.filename}`;
    
    const {name,email,password} = req.body;

    bcrypt.hash(password,12)
    .then(hashedPass=>{
        console.log(hashedPass);
        const newUser = new userModel({name,email,password:hashedPass,imageUrl,places:[],lastPlaceImageUrl:""});
        newUser.save().then(result=>{
            let token;
            try{
                token = jwt.sign({userId:result._id,email:result.email},'supersecretdontshare',{expiresIn:'1h'})
            } catch(err) {
                return next(new Error("Unable to signup due to jwt token generation"))
            }
            res.json({id:result._id,email:result.email,name:result.name,imageUrl:result.imageUrl,token});
        })
        .catch(err=>{
            console.log(err);
            console.log("Unable to create new user!");
            next(new HttpError("Unable to create new user",302))
        })
    })
    .catch(err=>{
        console.log("Unable to hash password")
        return next(new HttpError("Unable to hash password"));
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