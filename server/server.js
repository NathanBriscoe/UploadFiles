/**
 * Created by NathanBriscoe on 3/1/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var index = require('./routes/index');
var uploads = require('./routes/uploads');

var app = express();

var mongoURI = 'mongodb://localhost:27017/UploadFiles';//replace with mongodb url
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err){
    if(err){
        console.log('mongodb connection error', err);
    } else {
        console.log('mongodb connection successful');
    }
});

MongoDB.once('open', function(){
    console.log('mongodb connection open');
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setting up routes here
app.use(express.static('server/public'));
app.use('/', index);
app.use('/uploads', uploads);


app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/views/index.html');
});

var server = app.listen(3000, function(request, response){
   var port = server.address().port;
    console.log('Listening to port', port);
});

module.exports = app;