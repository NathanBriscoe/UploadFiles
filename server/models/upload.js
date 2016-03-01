/**
 * Created by NathanBriscoe on 3/1/16.
 */
var mongoose = require('mongoose');

var UploadSchema = mongoose.Schema({
    name: String,
    created: Date,
    file: Object
});

module.exports = mongoose.model('Upload', UploadSchema);



//This creates a really basic Schema that has the name the user typed in, the date we created, and then an object to store all of the data about the file in.