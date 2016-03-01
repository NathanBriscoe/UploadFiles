/**
 * Created by NathanBriscoe on 3/1/16.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Upload = require('../models/upload');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});


router.post('/', upload.single('file'), function(request, response, next){
   console.log(request.body);
    console.log(request.file);
    var newUpload = {
        name: request.body.name,
        created: Date.now(),
        file: request.file
    };
    Upload.create(newUpload, function(err, next){
        if(err){
            next(err);
        } else {
            response.send(newUpload);
        }
    });
});

module.exports = router;

//Multer handles the entire file upload for us, and creates a random name for the file so that two files with the same name don't collide.