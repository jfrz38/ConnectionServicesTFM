var express = require('express');
var app = express()

require('./model/db')
const router = require('./routes/v1/index')

app.use('/data', express.static('./build'));

app.use('/data', router)

app.listen(6202);
