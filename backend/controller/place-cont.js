const PLACES = require('../model/place-model')

const HttpError = require('../model/http-error');

exports.placesMain = (req,res,next)=>{
    res.json(PLACES)
}

exports.getPlacesByPlaceId = (req,res,next)=>{
    console.log(req.params);
    const placeId = req.params.placeId;
    const placeItem = PLACES.find((place)=>{
        return place.id == placeId;
    });

    if(!placeItem){
        throw new HttpError("Can't find place by given pid... Error using error model",302);
    }

    res.json(placeItem);
}

exports.getPlacesByUserId = (req,res,next)=>{
    console.log(req.params);
    const userId = req.params.userId;
    const userPlaces = PLACES.filter(place=>{
        return place.userId == userId;
    })

    res.json(userPlaces);
}

exports.createPlace = (req,res,next)=>{
    const {title,description,address,coordinates,userId,imageUrl} = req.body;
    const newPlace = {
        title,
        description,
        address,
        coordinates:{
            lat:coordinates.lat,
            lng:coordinates.lng
        },
        userId,
        imageUrl
    }
    PLACES.push(newPlace);

    res.status(201).json(newPlace);
}