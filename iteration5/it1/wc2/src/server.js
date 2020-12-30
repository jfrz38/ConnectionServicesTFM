import express from 'express';
import render from './second-wc/render.js'

const app = express();
app.use('/wc2', express.static('./build'));

app.use('/wc2-load', (req, res) => {
    console.log("entra render: ",req.query)
    console.log("render 2 = ",req.query.initialValue)
    res.send(render(0));
});
app.listen(5103);
