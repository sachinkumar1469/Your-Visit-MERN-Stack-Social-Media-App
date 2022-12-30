const jwt = require('jsonwebtoken');
const HttpError = require('../model/http-error')

module.exports = (req,res,next)=>{
    if(req.method === "OPTIONS"){
        return next();
    }
    try{
        const token = req.headers.authorization.split(" ")[1];  // Authorization : "Bearer Token"
        if(!token){
            throw new Error();
        }
        const decodedtoken = jwt.verify(token,'supersecretdontshare');
        req.userData = {userId:decodedtoken.userId}
        next();
    }catch(err){
        return next(new HttpError("Authenitcation failed",401))
    }

}