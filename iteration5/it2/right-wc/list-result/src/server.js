import express from 'express';
import render from './list-result/render.js'
import fetch from 'cross-fetch';

var app = express()

app.use('/list', express.static('./build'));

app.get('/list/:type?', async (req, res) => {
    console.log("entra en /list")
    var type = req.params.type
    console.log("type = ",type)
    var url = "http://"+process.env.HOST+":";
    url += type === "api" ? process.env.APIPORT : process.env.GRPCPORT
    try{
        var response = await fetch(url);
        var data = await response.json();
        return res.send(render({title:type.toUpperCase(), list: data}))
    }catch(e){
        console.log("error: ",e)
        res.send(render())
    }
    /*fetch(url)
        .then(response => response.json())
        .then(data => res.send(render({title:type.toUpperCase(), list: data})))
        .catch(e => console.log("error: ",e))*/
        
    

});

app.listen(5206);
