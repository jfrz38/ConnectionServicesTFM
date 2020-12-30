import express from 'express';
import render from './call-api/render.js'
import fetch from 'cross-fetch';

//import axios from 'https://unpkg.com/axios/dist/axios.min.js'

var app = express()

app.use('/api', express.static('./build'));

app.use('/api', (req, res) => {
    console.log("entra en /api")
    var host = process.env.HOST;
    var port = process.env.PORT;
    var url = "http://"+host+":"+port
    console.log("host = "+host+" ; port = "+port+" ; url = "+url)
    /*axios.get(url).then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("error",error);
  })*/
    /*fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
    */
    res.send(render());
});

app.listen(5204);
