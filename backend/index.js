const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const placeRoutes = require('./routes/places-route');
const userRoutes = require("./routes/users-route");
const HttpError = require("./model/http-error");
const path = require('path')

const multer = require('multer')

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://sachinyadav1469:Sachin%40123@cluster0.my3twen.mongodb.net/yourvisit?retryWrites=true&w=majority')
.then(result=>{
    // console.log(result);
    app.listen(8081);
})
.catch(err=>{
    console.log("Unable to connect to database!")
})


app.use(express.static(path.join(require.main.filename,"..","uploads")))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Origin,X-Requested-With,Accept,Authorization');
    next();
})




app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/places',placeRoutes);
app.use('/api/users',userRoutes);

app.use((req,res,next)=>{
    throw new HttpError("404, Page not found",404)
})

app.use((error,req,res,next)=>{
    if(req.file){
        const p = path.join('uploads','images',req.file.filename)
        fs.unlink(p,(err)=>{
            console.log(err);
        })
    }
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500 ).json({message:error.message || "An unkown error occurred"})
})