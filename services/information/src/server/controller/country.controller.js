//const mongoose = require('mongoose');
const countries_model = require('../model/country')
const axios = require('axios');
const amqpService = require('../services/amqp.service')
//Información de un país
module.exports.getCountryInfo = async (req, res) => {
  const start = new Date()
  const code = req.params.iso
  try {
    var response = {}
    var r = await axios.get('https://restcountries.com/v3.1/alpha/' + code)
    if (r.data.length <= 0) {
      throw new Error()
    }
    const countryFound = r.data[0]
    const nativeName = countryFound.name.nativeName[Object.keys(countryFound.name.nativeName)[0]].common;
    response = {
      "capital": countryFound.capital.join(","),
      "continent": countryFound.region,
      "area": countryFound.area,
      "nativeName": nativeName,
      "population": countryFound.population,
      "populationDensity": (countryFound.population / countryFound.area).toFixed(2)
    }
    res.status(200).send(response)
  } catch (e) {
    res.status(404).send({ error: "Country not found" })
  }
  const end = new Date()
  const totalTime = end.getTime() - start.getTime();
  // Send message to queue
  amqpService.sendMessage({ country: code, time: totalTime, hour: new Date() });
}

// Datos
module.exports.getGlobalData = (req, res) => {
  amqpService.sendMessage({ country: "Global", time: null, hour: new Date() });
  return res.status(200).send({
    capital: "N/A",
    continent: "N/A",
    area: "148.9M",
    population: "6155182648",
    nativeName: "N/A",
    populationDensity: "41.34"
  })
}
