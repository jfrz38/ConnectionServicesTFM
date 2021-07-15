var express = require('express');
const router = require('./routes/v1/index')
var app = express()

app.use('/information', express.static('./build'));

app.use('/information', router)

app.listen(6204);
