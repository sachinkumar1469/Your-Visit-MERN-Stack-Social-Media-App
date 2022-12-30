const express = require('express');

const router = express.Router();
const {check} = require('express-validator');

const fileUpload = require('../middleware/file-upload');

const checkAuth = require('../middleware/check-auth')

const {deletePlaceById,updatePlaceById,getPlacesByUserId,getPlacesByPlaceId,createPlace} = require('../controller/place-cont')

// router.get('/',placesMain);

router.get('/user/:userId',getPlacesByUserId);

router.get("/:placeId",getPlacesByPlaceId); 

router.use(checkAuth)


// Protected routes

router.patch("/:placeId",[
    check("title")
    .not().
    isEmpty(),
    check("description")
    .isLength({min:5})
],updatePlaceById);

router.delete('/:placeId',deletePlaceById);

router.post('/',
(req,res,next)=>{console.log("i am here sssssssssssss ");next()},
    fileUpload.single('image'),
    [
    check('title')
    .not()
    .isEmpty(),
    check("description")
    .isLength({'min':5}),
    check("address")
    .isLength({min:5}),

],createPlace);

module.exports = router;