import express from 'express';
import render from './call-grpc/render.js'

var app = express()

app.use('/grpc', express.static('./build'));

app.use('/grpc', (req, res) => {
    res.send(render());
});
app.listen(5205);
