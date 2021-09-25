//const mongoose = require('mongoose');
const countries_model = require('../model/country')
const axios = require('axios');
const amqpService = require('../services/amqp.service')
  //Información de un país
  module.exports.getCountryInfo = async (req, res) => {
    const start = new Date()
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
        res.status(200).send(response)
      }else{
        res.status(404).send({error:"Country not found"})
      }
    }catch(e){
      res.status(404).send({error:"Country not found"})
    }
    const end = new Date()
    const totalTime = end.getTime() - start.getTime();
    // Send message to queue
    amqpService.sendMessage({country:code, time:totalTime, hour: new Date()});
  }

  // Datos
  module.exports.getGlobalData = (req, res) => {
    amqpService.sendMessage({country:"Global", time: null, hour: new Date()});
      return res.status(200).send({
        capital: "N/A",
        continent: "N/A",
        area: "148.9M",
        population: "6155182648",
        nativeName: "N/A",
        populationDensity: "41.34"
      })
  }
