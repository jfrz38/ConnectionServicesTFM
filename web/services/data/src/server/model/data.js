const mongoose = require('mongoose');

const data = new mongoose.Schema({
    flag: String,
    confirmed : Number,
    deaths : Number,
    recovered : Number
});

module.exports = mongoose.model('data', data,"data")
