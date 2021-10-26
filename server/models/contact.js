let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    ContactName: String,
    Email: String,
    ContactNumber: String,
},
{
    collection: "contacts"
});

module.exports =mongoose.model('contacts',contactModel);