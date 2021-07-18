//const mongoose = require('mongoose');
const countries_model = require('../model/country')
const axios = require('axios');

  //Información de un país
  module.exports.getCountryInfo = async (req, res) => {
    const code = req.params.iso
    try{
      var response = {}
      var r = await axios.get('https://restcountries.eu/rest/v2/alpha/'+code)
      response = {
        "capital":r.data.capital,
        "continent":r.data.region,
        "area":r.data.area,
        "nativeName":r.data.nativeName,
        "populationDensity":(r.data.population/r.data.area).toFixed(2)
      }
      const agg =
          [
            {
              "$match": {
                "country_iso2s": code.toUpperCase()
              }
            },
            {
              "$sort": {
                "date": -1
              }
            },
            {
              "$group": {
                "_id": null,
                "first": {
                  "$first": "$$ROOT"
                }
              }
            },
            {
              "$project": {
                "_id":0,
                "population": "$first.population"
              }
            }
          ]

      var pop = await countries_model.aggregate(agg);
      if(pop.length > 0){
        response.population = pop[0].population
        return res.status(200).send(response)
      }else{
        return res.status(404).send({error:"Country not found"})
      }
    }catch(e){
      return res.status(404).send({error:"Country not found"})
    } 
  }

  // Datos
  module.exports.getGlobalData = (req, res) => {
      return res.status(200).send({
        capital: "N/A",
        continent: "N/A",
        area: "148.9M",
        population: "6155182648",
        nativeName: "N/A",
        populationDensity: "41.34"
      })
  }
