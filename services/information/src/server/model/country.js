const mongoose = require('mongoose');

const model_countries_summary = new mongoose.Schema({
    uids: [String],
    confirmed : Number,
    deaths : Number,
    country : String,
    date : Date,
    country_iso2s: [String],
    country_iso3s : [String],
    country_codes : [Number],
    combined_names : [String],
    population : Number,
    recovered : Number
});

//mongoose.model('CountriesSummaryModel', model_countries_summary,"countries_summary");
module.exports = mongoose.model('CountriesSummaryModel', model_countries_summary,"countries_summary")
