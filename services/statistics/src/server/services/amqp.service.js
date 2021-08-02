const QUEUE_NAME = 'country-statics'
const CONNECTION_URL = 'amqp://rabbitmq:5672'//'amqp://localhost'
var amqp = require('amqplib/callback_api');

module.exports.connectQueue = () => {
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

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});
}
