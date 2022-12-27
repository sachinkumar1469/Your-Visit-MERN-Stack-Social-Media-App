const USERS = require('../model/user-model');

exports.userMain = (req,res,next)=>{
    res.json(USERS)
}