import express from 'express';
//import render from './call-api/render.js'
import * as service from './service/service.js'


var app = express()

app.use('/api', express.static('./build'));

app.use('/api/elements', (req, res) => {
    console.log("ENTRA API")
    /*var response = await service.getList();
    console.log("response server.js = ",response)
    return res.status(200).json([1,2,3,4])*/
    service.getList().then(response => {
        console.log("response api = ",response)
        //res.status(200).json([1,2,3,4])
        res.status(200).send(response)
    }).catch(e => {
        res.status(404).send("Error")
    })
});

app.listen(6104);
