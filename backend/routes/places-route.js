const express = require('express');

const router = express.Router();

const {placesMain,getPlacesByUserId,getPlacesByPlaceId,createPlace} = require('../controller/place-cont')

// router.get('/',placesMain);

router.get('/user/:userId',getPlacesByUserId);

router.get("/:placeId",getPlacesByPlaceId);

router.post('/',createPlace)

module.exports = router;