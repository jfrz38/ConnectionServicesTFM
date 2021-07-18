const express = require('express');
const router = express.Router();
const controller = require('../../controllers/data.controller')

router.get('/', controller.getExample)
router.get('/example', controller.getExampleValue)


module.exports = router
