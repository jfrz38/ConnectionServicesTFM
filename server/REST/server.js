const initialObjects = require('../ObjectsCreation')
initialObjects.createObjects()
const objects = initialObjects.objects
var express = require('express')
var app = express()

app.get('/:size',(req,res) => {
    const size = req.params.size
    res.status(200).send(objects[size])
})
const port = 8080;
app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});
