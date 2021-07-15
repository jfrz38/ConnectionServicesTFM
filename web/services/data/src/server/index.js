var express = require('express');
//const router = require('./routes/v1/index')
var app = express()

app.use('/data', express.static('./build'));

//app.use('/api', router)

app.listen(6202);
