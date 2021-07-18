const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
//var middleware = require('../controllers/middleware'); 
//var ctrlAuth = require('../controllers/auth'); 

//Auth
/*
router.get('/',ctrlAuth.goInto)

//Por días
router.get('/covid/confirmed-bydays/:iso', controller.getConfirmedByDaysFromCountry)
router.get('/covid/dead-bydays/:iso', controller.getDeathsByDaysFromCountry)
router.get('/covid/recover-bydays/:iso', controller.getRecoveredByDaysFromCountry)
*/

router.get('/data/:code', controller.getCountryInfo)
router.get('/covid/country/recover/:iso', controller.getRecoveredByDaysFromCountry)
router.get('/covid/country/confirm/:iso', controller.getConfirmedByDaysFromCountry)
router.get('/covid/country/dead/:iso', controller.getDeathsByDaysFromCountry)
router.get('/covid/global/recover',controller.getGlobalRecoveredByDays)
router.get('/covid/global/confirm',controller.getGlobalConfirmedByDays)
router.get('/covid/global/dead',controller.getGlobalDeathsByDays)

module.exports = router;
