const express = require('express');
const router = express.Router();
const controller = require('../../controller/country.controller')

router.get('/', controller.getGlobalData)
router.get('/:iso', controller.getCountryInfo)

module.exports = router
