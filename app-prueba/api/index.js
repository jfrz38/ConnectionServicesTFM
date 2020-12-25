var express = require('express')
var cors = require('cors')
var app = express()

app.get('/', cors(), function (req, res, next) {
    var list = ["api element 1", "api element 2", "api element 3", "api element 4"]
    res.status(200).json(list);
})

app.listen(4000, function () {
  console.log('listening on port 4000')
})

