import express from 'express';
import render from './call-api/render.js'

var app = express()

app.use('/api', express.static('./build'));

app.use('/api', (req, res) => {
    res.send(render());
});

app.listen(5204);
