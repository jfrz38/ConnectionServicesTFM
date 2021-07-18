require('./mongo/db');
const mongoose = require('mongoose');
const countries_model = mongoose.model('CountriesSummaryModel');
const metadata_model = mongoose.model('MetaDataModel');
const axios = require('axios');

module.exports.getCountryData = async (code) => {
    try{
        var data = {}
        var date = await getLastDateFromDB();
        data.date = date.getDate() + '-'+(date.getMonth()+1)+'-'+date.getFullYear();
        data.flag = "https://www.countryflags.io/"+(code).toLowerCase()+"/flat/64.png";
        var country = await countries_model
            .find({country_iso2s: code.toUpperCase()})
            .sort({date:-1})
        var country = country[0]
        data.confirmed = country.confirmed;
        data.recovered = country.recovered;
        data.deaths = country.deaths;
        data.country = country.country;
        return data;
    }catch{
        return {}
    }
}

module.exports.getGlobalData = async () => {
    try{
        var data = {}
        var date = await getLastDateFromDB();
        data.date = date.getDate() + '-'+(date.getMonth()+1)+'-'+date.getFullYear();
        data.flag = "";
        data.country = "World";
        const agg = [
        {
          '$match': {
            'date': date
          }
        }, {
          '$group': {
            '_id': null, 
            'confirmed': {
              '$sum': '$confirmed'
            },
            'deaths':{
                '$sum': '$deaths'
            },
            'recovered':{
                '$sum': '$recovered'
            }
          }
        }
      ];
      var result = await countries_model.aggregate(agg)
      if(result.length == 0){
          return {}
        }else{
            var country = result[0]
            data.confirmed = country.confirmed;
            data.recovered = country.recovered;
            data.deaths = country.deaths;
            return data;
        }
        return data;
        
    }catch(e){
        return {}
    }
}

module.exports.getGlobalDataByCountries = async () => {
    try{
        var date = await getLastDateFromDB();
        var countries = await countries_model.find({date:date})
        if(countries.length == 0) {
            return []
        }else{
            var data = []
            countries.forEach(element=>{
                if(element.country_iso2s[0] === undefined) return;
                if(element.country == "France") element.country_iso2s[0] = "FR"
                if(element.country == "United Kingdom") element.country_iso2s[0] = "GB"
                if(element.country == "China") element.country_iso2s[0] = "CN"
                data.push([element.country_iso2s[0],element.confirmed,element.deaths])
            })
            return data;
        }
    }catch(e){
        return [];
    }
}

async function getLastDateFromDB(){
    return new Promise(resolve=>{
        metadata_model
        .find()
        .exec((err,doc)=>{
        if(doc.length == 0) resolve(new Date());
        else resolve(doc[0].last_date)
        })
    })
}
