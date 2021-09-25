const QUEUE_NAME = process.env.QUEUE_NAME || 'map-statics'
const CONNECTION_URL = process.env.CONNECTION_URL ||'amqp://rabbitmq'
var amqp = require('amqplib/callback_api');

module.exports.sendMessage = (message) => {
    amqp.connect(CONNECTION_URL, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
    
            var queue = QUEUE_NAME;
    
            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
            console.log(" [x] Sent (map) %s", message);
        });
        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });
}