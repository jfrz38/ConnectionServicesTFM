import express from 'express';
import render from './second-wc/render.js'

const app = express();
app.use('/wc2', express.static('./build'));

app.use('/wc2', (req, res) => {
    res.send(render(req.query.initialValue));
});
app.listen(5103);
