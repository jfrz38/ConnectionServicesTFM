var express = require('express');
const router = require('./routes/v1/index')
var app = express()
require('./model/db')

app.use('/data', express.static('./build'));

app.use('/data', router)

app.listen(6202);
