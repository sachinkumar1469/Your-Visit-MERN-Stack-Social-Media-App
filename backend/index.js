const express = require('express');
const bodyParser = require('body-parser');

const placeRoutes = require('./routes/places-route');
const userRoutes = require("./routes/users-route");

const app = express();
app.listen(8081);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/places',placeRoutes);
app.use('/api/users',userRoutes);

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500 ).json({message:error.message || "An unkown error occurred"})
})