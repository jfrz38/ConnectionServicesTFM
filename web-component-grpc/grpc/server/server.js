var path = require('path');
var PROTO_PATH = path.resolve(__dirname, '..') + '/proto/helloworld.proto';
var assert = require('assert');
var async = require('async');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var helloworld = protoDescriptor.helloworld;

/**
 * @param {!Object} call
 * @param {function():?} callback
 */
function doSayHello(call, callback) {
  console.log("entra say hello")
  callback(null, {
    message: 'Hello! ' + call.request.name
  });
}

function doReceiveData(call, callback){
  callback
}

/**
 * @return {!Object} gRPC server
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(helloworld.Greeter.service, {
    sayHello: doSayHello,
  });
  server.addService(helloworld.Receiver.service,{
    receiveData: doReceiveData,
  });

  return server;
}

if (require.main === module) {
  var server = getServer();
  server.bindAsync(
    '0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
      assert.ifError(err);
      server.start();
  });
}

//TODO: Crear un método bindeado al RPC que cuando desde aquí se le llame (no desde el cliente, desde aquí) le aparezca el mensaje al cliente ????
exports.getServer = getServer;
