const express = require('express');
const router = express.Router();

//Body de la petición
var bodyParser = require('body-parser')
router.use(bodyParser.json())

//Country
const countryRoute = require('./country.route')

router.use('/data', countryRoute);

module.exports = router
