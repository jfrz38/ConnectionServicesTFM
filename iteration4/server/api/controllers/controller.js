const mongoose = require('mongoose');
const countries_model = mongoose.model('CountriesSummaryModel');
const metadata_model = mongoose.model('MetaDataModel');
const axios = require('axios');

  //MetaData
  const getLastDate = (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    metadata_model
    .find()
    .exec((err, doc) => {
      if(doc.length == 0){
        return res
        .status(404)
        .json({
          "message": "Can't load last date" });
      }
      var date = doc[0].last_date
      var formatDate = date.getDate() + '-'+(date.getMonth()+1)+'-'+date.getFullYear();
      res
        .status(200)
        .json({"last_date" : formatDate});  
    })
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

  //Información de un país
  module.exports.getCountryInfo = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    try {
      var response = {}
      var code = req.params.code.toLowerCase();
      
      axios.get('https://restcountries.eu/rest/v2/alpha/'+code)
        .then(async r => {
          response = {
            "capital":r.data.capital,
            "continent":r.data.region,
            "area":r.data.area,
            "nativeName":r.data.nativeName,
            "populationDensity":(r.data.population/r.data.area).toFixed(2)
          }
          //Get population
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
          var pop = await countries_model.aggregate(agg)
          if(pop.length > 0){
            response.population = pop[0].population
            return res.status(200).send(response); 
          }else{
            return res.status(404).send("Country not found")
          }
        }).catch(e => {
          return res.status(404).send("Country not found")
        })
    }catch{
      console.log("e")
      return res.status(404).send("Country not found")
    }
  }

  //Confirmados
  module.exports.getConfirmedByDaysFromCountry = (req,res) =>{
    res.header('Access-Control-Allow-Origin', '*');
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
  module.exports.getRecoveredByDaysFromCountry = (req,res) =>{
    res.header('Access-Control-Allow-Origin', '*');
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
  module.exports.getDeathsByDaysFromCountry = (req,res) =>{
    res.header('Access-Control-Allow-Origin', '*');
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
  module.exports.getGlobalConfirmedByDays = (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
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
  module.exports.getGlobalRecoveredByDays = (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
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
  module.exports.getGlobalDeathsByDays = (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
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
