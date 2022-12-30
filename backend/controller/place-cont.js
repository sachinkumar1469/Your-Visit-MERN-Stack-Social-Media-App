const placeModel = require('../model/place-model');
const userModel = require('../model/user-model');

const HttpError = require('../model/http-error');
const {v4} = require('uuid');
const { validationResult } = require('express-validator');
const getCoord = require('../utils/coordinatesApi');
const mongoose = require('mongoose');



exports.getPlacesByPlaceId = (req,res,next)=>{

    const placeId = req.params.placeId;
    // console.log(placeId);
    // const newId = new mongoose.Schema.Types.ObjectId(placeId);
    // console.log(newId);
    placeModel.findOne({_id:placeId})
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
        return next(new HttpError("Unable to find place by give place id",302));
    })
}

exports.getPlacesByUserId = (req,res,next)=>{
    
    const userId = req.params.userId;
    // placeModel.find({userId})
    // .then(result=>{
        
    //     res.json(result);
    // })
    // .catch(err=>{
    //     console.log(err);
    //    return next(new HttpError("Unable to find places of given userid",302))
    // })

    userModel.findById({_id:userId}).populate('places')
    .then(result=>{
        console.log(result)
        res.json(result.places)
    })
    .catch(err=>{
        return next(new HttpError("Unbale to find places for given user id"))
    })

}

exports.createPlace = (req,res,next)=>{
    const imageUrl = `http://localhost:8081/images/${req.file.filename}`
    const vaErr = validationResult(req);
    if(vaErr.array().length){
        throw new HttpError("Invalid Inputs");
    }
    // console.log(vaErr)
    const {title,description,address,userId} = req.body;
    const newPlace = new placeModel({
        title,
        description,
        address,
        coordinates:getCoord(address),
        userId,
        imageUrl
    });
    newPlace.save().then((result)=>{
        // console.log(result);
        const pId = result._id;
        userModel.updateOne({_id:userId},{
            $push:{
                places:pId
            },
            $set:{
                lastPlaceImageUrl:result.imageUrl
            }
        })
        .then(result=>{
            res.json(result);
        })
        .catch(err=>{
            console.log(err);
            return next(new HttpError("Unbale to add place id in users array",302))
        })
    })
    .catch(err=>{
       return next(new HttpError("Unable to create new place",302))
    })  
}

exports.deletePlaceById = (req,res,next)=>{
    const {placeId} = req.params;
    console.log(placeId);

    placeModel.findByIdAndDelete({_id:placeId})
    .then(result=>{
        // console.log(result);
        const userId = result.userId;
        userModel.updateOne({_id:userId},{
            $pull:{
                places:placeId
            }
        })
        .then(resultt=>{
            console.log(resultt)
            res.json(resultt);

        })
        .catch(err=>{
            console.log("Unbale to delete from an array");
        })
    })
    .catch(err=>{
        console.log("find by id error")
    })
}

exports.updatePlaceById = (req,res,next)=>{
    const vaErr = validationResult(req);
    if(vaErr.array().length){
        throw new HttpError("Invalid Inputs in patch",302);
    }
    const {placeId} = req.params;
    const {title,description} = req.body;
    console.log(placeId);
    placeModel.updateOne({_id:placeId},{$set:{
        title,
        description
    }})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
       return next(new HttpError("Unable to update place by Id",302));
    })
}