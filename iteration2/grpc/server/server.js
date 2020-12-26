var path = require('path');
var PROTO_PATH = path.resolve(__dirname, '..') + '/proto/list.proto';
var assert = require('assert');
var async = require('async');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var list = protoDescriptor.list;

/**
 * @param {!Object} call
 * @param {function():?} callback
 */
function doGetElements(call, callback) {
  console.log("Entra doGetElements")
  callback(null, {
    list: [
      "gRPC element 1",
      "gRPC element 2",
      "gRPC element 3",
      "gRPC element 4",
    ]
  });
}

/**
 * @return {!Object} gRPC server
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(list.List.service, {
    getElements: doGetElements,
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

exports.getServer = getServer;
