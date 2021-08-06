const mongoose = require('mongoose');
const global_model = mongoose.model('GlobalModel');
const countries_summary_model = mongoose.model('CountriesSummaryModel');
const metadata_model = mongoose.model('MetaDataModel');
const amqpService = require('../services/amqp.service')

module.exports.getWorldMap = async () => {
    const start = new Date()
    const date = await getLastDateFromDB()
    const country = await countries_summary_model
        .find({ date: date })
        .exec();
    if (country.length == 0) {
        return {}
    }
    var data = [["Data","Confirmed","Deaths"]]
    country.forEach(element => {
        if (element.country == "France") element.country_iso2s[0] = "FR"
        if (element.country == "United Kingdom") element.country_iso2s[0] = "GB"
        if (element.country == "China") element.country_iso2s[0] = "CN"
        if (element.country == "Denmark") element.country_iso2s[0] = "DK"
        if (element.country == "Netherlands") element.country_iso2s[0] = "NL"
        data.push([element.country_iso2s[0], element.confirmed, element.deaths])
    })
    const info = {
        data: data,
        region: "world"
    }
    sendMessage(start)
    return info;

}

module.exports.getRegionMap = async (iso) => {
    const start = new Date()
    const date = await getLastDateFromDB()
    const result = await countries_summary_model
        .find({ date: date,
            country_iso2s: iso.toUpperCase() })
        .exec();
    if (result.length == 0) {
        
        return {}
    }
    var country = result[0]
    if (country.country == "France") country.country_iso2s[0] = "FR"
    if (country.country == "United Kingdom") country.country_iso2s[0] = "GB"
    if (country.country == "China") country.country_iso2s[0] = "CN"
    if (country.country == "Denmark") country.country_iso2s[0] = "DK"
    if (country.country == "Netherlands") country.country_iso2s[0] = "NL"

    const data = {
        data: [
            ['Country', 'Confirmed', 'Deaths'],
            [country.country_iso2s[0], country.confirmed, country.deaths]
        ],
        region: country.country_iso2s[0]
    }
    sendMessage(start)
    return data;
}

async function getLastDateFromDB() {
    return new Promise(resolve => {
        metadata_model
            .find()
            .exec((err, doc) => {
                if (doc.length == 0) resolve(new Date());
                else resolve(doc[0].last_date)
            })
    })
}

function sendMessage(startTime){
    const end = new Date()
    const totalTime = end.getTime() - startTime.getTime();
    // Send message to queue
    amqpService.sendMessage({country:"Global", time:totalTime, hour: new Date()});
}