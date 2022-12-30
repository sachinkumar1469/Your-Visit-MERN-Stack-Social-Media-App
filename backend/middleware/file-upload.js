const multer = require('multer');
const {v4} = require('uuid');
const path = require('path')

const MIME_TYPE = {
    "image/png":"png",
    "image/jpg":"jpg",
    "image/jpeg":"jpeg"
}

const fileUpload = multer({
    limits:50000,
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            console.log("inside destingation")
            cb(null,path.join("uploads","images"))
        },
        filename:(req,file,cb)=>{
            console.log("inside file name")
            const ext = MIME_TYPE[file.mimetype];
            cb(null, v4()+"."+ext);
        }
    }),
    fileFilter:(req,file,cb)=>{
        const isValid = !!MIME_TYPE[file.mimetype];
        let err = isValid ? null : new Error("Invalid mime type")
        cb(err,isValid);
    }
})

module.exports = fileUpload;