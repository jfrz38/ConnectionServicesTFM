import express from 'express';
import render from './central-wc/render.js'

const app = express();
app.use('/center', express.static('./build'));
/*
app.use('/', (req, res) => {
    res.send(render());
});*/

app.listen(5202);
