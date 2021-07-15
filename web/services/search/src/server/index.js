const express = require('express')
const client = require('./gRPC/client/client')
const server = require('./gRPC/server/server')
var app = express()
app.use('/grpc', express.static('./build'));

app.use('/grpc/countries', (req, res) => {
    client.getCountryList(null, (err,list)=> {
        if(err){
            res.status(400).send()
        }else{
            res.status(200).send({list:list.data})
        }
    })
});

app.listen(6205);
