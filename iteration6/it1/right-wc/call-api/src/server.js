import express from 'express';
import * as service from './mongo/service/service.js'

var app = express()

app.use('/api', express.static('./build'));

app.use('/api/elements', (req, res) => {
    service.getList().then(response => {
        res.status(200).send(response)
    }).catch(e => {
        res.status(404).send("Error")
    })
});

app.listen(6104);
