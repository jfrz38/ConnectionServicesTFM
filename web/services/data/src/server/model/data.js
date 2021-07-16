const mongoose = require('mongoose');

const model_global = new mongoose.Schema({
    uid: String,
    country_iso2: String,
    country_iso3: String,
    country_code: Number,
    country: String,
    combined_name: String,
    population: Number,
    loc : {
        type: String,
        coordinates: [Number]
    },
    date: Date,
    confirmed : Number,
    deaths : Number,
    recovered : Number
})
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

const modelMetadata = new mongoose.Schema({
    _id: String,
    countries: [String],
    states : [String],
    states_us : [String],
    counties : [String],
    iso3s : [String],
    uids : [Number],
    population : Number,
    first_date : Date,
    last_date : Date
});

mongoose.model('GlobalModel', model_global,"global");
mongoose.model('CountriesSummaryModel', model_countries_summary,"countries_summary");
mongoose.model('MetaDataModel', modelMetadata,"metadata");
