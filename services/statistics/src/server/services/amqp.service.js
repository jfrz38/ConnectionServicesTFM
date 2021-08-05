const QUEUE_STATICS = process.env.QUEUE_STATICS || 'information-statics'
const MAP_STATICS = process.env.MAP_STATICS || 'map-statics'
const CONNECTION_URL = process.env.CONNECTION_URL ||'amqp://rabbitmq:5672'
var amqp = require('amqplib/callback_api');
const fs = require('fs');

module.exports.connectQueue = () => {
  amqp.connect(CONNECTION_URL, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    informationConnection(connection, QUEUE_STATICS)
    mapConnection(connection, MAP_STATICS)
    
});
}

function informationConnection(connection, queue){
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", JSON.parse(msg.content));
            writeFile("information", JSON.parse(msg.content))
        }, {
            noAck: true
        });
    });
}

function mapConnection(connection, queue){
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", JSON.parse(msg.content));
        }, {
            noAck: true
        });
    });
}

function writeFile(file, data){
    fs.writeFile(`/tmp/${file}`, `Country:${data.country}\tTime:${data.time}\tHour:${data.hour}\n`, {flag:'a'},function(err) {
        if(err) {
            console.log("Error writing file: ",err);
        }
    }); 
}