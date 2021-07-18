const express = require('express');
const router = express.Router();

//Body de la petición
var bodyParser = require('body-parser')
router.use(bodyParser.json())

//Data
const dataRoute = require('./data.route')

router.use('/values', dataRoute);

module.exports = router
