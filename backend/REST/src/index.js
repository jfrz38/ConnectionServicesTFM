const express = require('express')
const router = require('./routes/v1/data.route')

const app = express()
app.use('/', router)

const port = 8081
app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})

module.exports = app
