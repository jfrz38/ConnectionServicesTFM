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
function doGetCountryData(call, callback) {
  console.log("Entra doGetCountryData")
  console.log("call = ",call)
  callback(null, {
    response: {}
  });
}

function doGetMapData(call, callback){
  console.log("entra doGetMapData")
  console.log("call = ",call)
  callback(null,{
    chartData: [
      ['Country','Confirmed', 'Deaths'],
      [ 'ES', 0,0]
    ]
  })
}

/**
 * @return {!Object} gRPC server
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(countrydata.CountryData.service, {
    getCountryData: doGetCountryData,
    getMapData: doGetMapData
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
