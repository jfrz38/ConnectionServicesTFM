//const mongoose = require('mongoose');
const countries_model = require('../model/country')
const axios = require('axios');

  //Datos de algunos países
  module.exports.getRandomData = async (req, res) => {
    var code = req.code
    const agg = [
      {
        '$match': {
          'country_iso2s': code.toUpperCase()
        }
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 4
      }, {
        '$group': {
          '_id': null, 
          'list': {
            '$push': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }
        }
      }
    ];
    var result = await countries_model.aggregate(agg)
    console.log("result from API = ",result)
    return result.length == 0 ? res.status(200).send({"list":[]}): res.status(200).send({"list" : result[0].list})
    
  }

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

  //Confirmados
  module.exports.getConfirmedByDaysFromCountry = () =>{
    
    const agg = [
      {
        '$match': {
          'country_iso2s': req.params.iso.toUpperCase()
        }
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 15
      }, {
        '$group': {
          '_id': null, 
          'confirmed': {
            '$push': '$confirmed'
          }, 
          'dates': {
            '$push': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }
        }
      }
    ];
    countries_model
      .aggregate(agg, (err, result)=>{
        if(result.length == 0){
          return res
            .status(404)
            .json({
              "message": "Can't retrieve data by days for "+req.params.iso });
        }
        res
          .status(200)
          .json({"dates" : result[0].dates.reverse(), "confirmed": result[0].confirmed.reverse()});
      })
  };

  //Recuperados
  module.exports.getRecoveredByDaysFromCountry = () =>{
    
    const agg = [
      {
        '$match': {
          'country_iso2s': req.params.iso.toUpperCase()
        }
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 15
      }, {
        '$group': {
          '_id': null, 
          'recovered': {
            '$push': '$recovered'
          }, 
          'dates': {
            '$push': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }
        }
      }
    ];
    countries_model
      .aggregate(agg, (err, result)=>{
        if(result.length == 0){
          return res
            .status(404)
            .json({
              "message": "Can't retrieve data by days for "+req.params.iso });
        }
        res
          .status(200)
          .json({"dates" : result[0].dates.reverse(), "recovered": result[0].recovered.reverse()});
      })
  };
  
  //Muertes
  module.exports.getDeathsByDaysFromCountry = () =>{
    
    const agg = [
      {
        '$match': {
          'country_iso2s': req.params.iso.toUpperCase()
        }
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 15
      }, {
        '$group': {
          '_id': null, 
          'deaths': {
            '$push': '$deaths'
          }, 
          'dates': {
            '$push': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }
        }
      }
    ];
    countries_model
      .aggregate(agg, (err, result)=>{
        if(result.length == 0){
          return res
            .status(404)
            .json({
              "message": "Can't retrieve data by days for "+req.params.iso });
        }
        res
          .status(200)
          .json({"dates" : result[0].dates.reverse(), "deaths": result[0].deaths.reverse()});
      })
  };

  //Información Global
  //Confirmados
  module.exports.getGlobalConfirmedByDays = ()=>{
    
    const agg = [
        {
        '$group': {
          '_id': {
            'date': '$date'
          }, 
          'date': {
            '$addToSet': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }, 
          'totalConfirmed': {
            '$sum': '$confirmed'
          }
        }
      }, {
        '$sort': {
          '_id': -1
        }
      }, {
        '$limit': 15
      }
    ];
    countries_model
    .aggregate(agg, (err, result)=>{
      if(result.length == 0){
        return res
          .status(404)
          .json({
            "message": "Can't retrieve global confirmed by days" });
      }
      var confirmed = []
      var dates = []
      result.map(r=>{
        confirmed.push(r.totalConfirmed)
        dates.push(r.date[0])
      })
      res
        .status(200)
        .json({"dates" : dates.reverse(), "confirmed": confirmed.reverse()}); 
    })
  }
  //Recuperados
  module.exports.getGlobalRecoveredByDays = ()=>{
    
    const agg = [
        {
        '$group': {
          '_id': {
            'date': '$date'
          }, 
          'date': {
            '$addToSet': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }, 
          'totalRecovered': {
            '$sum': '$recovered'
          }
        }
      }, {
        '$sort': {
          '_id': -1
        }
      }, {
        '$limit': 15
      }
    ];
    countries_model
    .aggregate(agg, (err, result)=>{
      if(result.length == 0){
        return res
          .status(404)
          .json({
            "message": "Can't retrieve global recovered by days" });
      }
      var recovered = []
      var dates = []
      result.map(r=>{
        recovered.push(r.totalRecovered)
        dates.push(r.date[0])
      })
      res
        .status(200)
        .json({"dates" : dates.reverse(), "recovered": recovered.reverse()}); 
    })
  }
  //Muertes
  module.exports.getGlobalDeathsByDays = ()=>{
    
    const agg = [
        {
        '$group': {
          '_id': {
            'date': '$date'
          }, 
          'date': {
            '$addToSet': {
              '$dateToString': {
                'format': '%d-%m', 
                'date': '$date'
              }
            }
          }, 
          'totalDeaths': {
            '$sum': '$deaths'
          }
        }
      }, {
        '$sort': {
          '_id': -1
        }
      }, {
        '$limit': 15
      }
    ];
    countries_model
    .aggregate(agg, (err, result)=>{
      if(result.length == 0){
        return res
          .status(404)
          .json({
            "message": "Can't retrieve global deaths by days" });
      }
      var deaths = []
      var dates = []
      result.map(r=>{
        deaths.push(r.totalDeaths)
        dates.push(r.date[0])
      })
      res
        .status(200)
        .json({"dates" : dates.reverse(), "deaths": deaths.reverse()}); 
    })
  }
  // Datos
  module.exports.getGlobalData = (req, res) => {
      return res.status(200).send({data:{
        capital: "N/A",
        continent: "N/A",
        area: "148.9M",
        population: "6155182648",
        nativeName: "N/A",
        populationDensity: "41.34"
      }})
  }
