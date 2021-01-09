const express = require('express')
const client = require('./gRPC/client/client')
const server = require('./gRPC/server/server')
var app = express()
app.use('/grpc', express.static('./build'));

app.use('/grpc/elements', (req, res) => {
    client.getElements(null, (err,data)=> {
        if(err){
            res.status(400).send()
        }else{
            res.status(200).send({list:data.list})
        }
    })
});

app.listen(6205);
