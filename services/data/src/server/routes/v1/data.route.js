const express = require('express');
const router = express.Router();
const controller = require('../../controller/data.controller')

router.get('/:iso', controller.getData)

module.exports = router
