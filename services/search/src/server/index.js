const express = require('express')
const server = require('./gRPC/server/server')
var app = express()
app.use('/search', express.static('./build'));

app.listen(6205);