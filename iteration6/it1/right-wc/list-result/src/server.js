import express from 'express';
//import render from './list-result/render.js'
//import fetch from 'cross-fetch';
//import { getList } from './service/service.js'

var app = express()

app.use('/list', express.static('./build'));

/*app.get('/list/:type?', async (req, res) => {
    var type = req.params.type
    if(!type) return res.send(render());
    res.send(render(await getList(type)));     
});*/

app.listen(6106);
