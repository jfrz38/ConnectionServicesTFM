import express from 'express';
import render from './second-wc/render.js'

const app = express();
app.use('/wc2', express.static('./build'));

app.use('/value', (req, res) => {
    console.log("entra render: ",req.query)
    res.send(render(0));
});
app.listen(3003);
