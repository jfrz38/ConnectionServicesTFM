import express from 'express';
import render from './side-wc/render.js'

const app = express();
app.use('/side', express.static('./build'));

app.use('/side', (req, res) => {
    var value = req.query.position === "left"? "-":"+";
    res.send(render(value));
});
app.listen(5203);
