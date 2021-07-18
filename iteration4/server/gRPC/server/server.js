var path = require('path');
var PROTO_PATH = path.resolve(__dirname, '..') + '/proto/CountryData.proto';
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
var countrydata = protoDescriptor.countrydata;
var mongoService = require('./service')

/**
 * @param {!Object} call
 * @param {function():?} callback
 */
async function doGetCountryData(call, callback) {

  var code = call.request.code;
  var data = {}
  if(code === ""){
    //Global
    data = await mongoService.getGlobalData()
  }else{
    //País
    data = await mongoService.getCountryData(code)
  }
                    
  callback(null, {
    data: data
  });
}

async function doGetMapData(call, callback){
  //var data = await mongoService.getGlobalDataByCountries();
  data = [["0",0,0],["1",1,1],["2",2,2],["3",3,3]]
  callback(null,{
    chartData: data
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
