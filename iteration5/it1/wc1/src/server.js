import express from 'express';
import render from './first-wc/render.js'

const app = express();
app.use('/wc1', express.static('./build'));

app.use('/', (req, res) => {
    res.send(render());
});

app.listen(5102);
