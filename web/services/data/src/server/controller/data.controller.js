const mongoose = require('mongoose');
const global_model = mongoose.model('GlobalModel');
const countries_summary_model = mongoose.model('CountriesSummaryModel');
const metadata_model = mongoose.model('MetaDataModel');
const axios = require('axios');

module.exports.getData = async (req, res) => {
  var type = req.query.type
  if (type === "" || type === undefined) return res.status(404).send({ error: "Type not found" })

  if (type === "confirm") return getConfirmed(req, res)
  if (type === "recover") return getRecovered(req, res)
  if (type === "dead") return getDeaths(req, res)
}

function getConfirmed(req, res) {
  return req.params.iso.toUpperCase() === "Global".toUpperCase() ? getConfirmedGlobal(res) : getConfirmedByCountry(req, res)
}

function getRecovered(req, res) {
  return req.params.iso.toUpperCase() === "Global".toUpperCase() ? getRecoveredGlobal(res) : getRecoveredByCountry(req, res)
}

function getDeaths(req, res) {
  return req.params.iso.toUpperCase() === "Global".toUpperCase() ? getDeathsGlobal(res) : getDeathsByCountry(req, res)
}

function getConfirmedByCountry(req, res) {
  countries_summary_model
    .find({ country_iso2s: req.params.iso.toUpperCase() })
    .sort({ date: -1 })
    .exec((err, country) => {
      if (err) {
        return res.status(404).send({ error: "Error" })
      }
      if (country.length == 0) {
        return res
          .status(404)
          .send({ message: "ISO " + req.params.iso + " has not any associated country" });
      }
      return res
        .status(200)
        .send({ value: country[0].confirmed });

    });
}

function getRecoveredByCountry(req, res) {
  countries_summary_model
    .find({ country_iso2s: req.params.iso.toUpperCase() })
    .sort({ date: -1 })
    .exec((err, country) => {
      if (err) {
        return res.status(404).send({ error: "Error" })
      }
      if (country.length == 0) {
        return res
          .status(404)
          .send({ message: "ISO " + req.params.iso + " has not any associated country" });
      }
      return res
        .status(200)
        .send({ value: country[0].recovered });

    });
}

function getDeathsByCountry(req, res) {
  countries_summary_model
    .find({ country_iso2s: req.params.iso.toUpperCase() })
    .sort({ date: -1 })
    .exec((err, country) => {
      if (err) {
        return res.status(404).send({ error: "Error" })
      }
      if (country.length == 0) {
        return res
          .status(404)
          .send({ message: "ISO " + req.params.iso + " has not any associated country" });
      }
      return res
        .status(200)
        .send({ value: country[0].deaths });

    });
}

function getConfirmedGlobal(res) {
  const agg = [
    {
      '$match': {
        'date': date
      }
    }, {
      '$group': {
        '_id': null,
        'totalConfirmed': {
          '$sum': '$confirmed'
        }
      }
    }
  ];
  countries_summary_modely
    .aggregate(agg, (err, result) => {
      if (result.length == 0) {
        return res
          .status(404)
          .json({
            "message": "Can't retrieve global confirmed"
          });
      }
      return res
        .status(200)
        .send({ value: result[0].totalConfirmed });
    })
}

function getRecoveredGlobal(res) {
  const agg = [
    {
      '$match': {
        'date': date
      }
    }, {
      '$group': {
        '_id': null,
        'totalRecovered': {
          '$sum': '$recovered'
        }
      }
    }
  ];
  countries_summary_modely
    .aggregate(agg, (err, result) => {
      if (result.length == 0) {
        return res
          .status(404)
          .json({
            "message": "Can't retrieve global confirmed"
          });
      }
      return res
        .status(200)
        .send({ value: result[0].totalRecovered });
    })
}

function getDeathsGlobal(res) {
  const agg = [
    {
      '$match': {
        'date': date
      }
    }, {
      '$group': {
        '_id': null,
        'totalDeaths': {
          '$sum': '$deaths'
        }
      }
    }
  ];
  countries_summary_modely
    .aggregate(agg, (err, result) => {
      if (result.length == 0) {
        return res
          .status(404)
          .json({
            "message": "Can't retrieve global confirmed"
          });
      }
      return res
        .status(200)
        .send({ value: result[0].totalDeaths });
    })
}
