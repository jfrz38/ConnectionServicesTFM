var express = require('express')
var cors = require('cors')
var app = express()

app.get('/elements', cors(), function (req, res, next) {
    var list = ["api element 1", "api element 2", "api element 3", "api element 4"]
    res.status(200).json(list);
})

app.listen(6110, function () {
  console.log('listening on port 5210')
})
