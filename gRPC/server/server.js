var path = require('path');
var PROTO_PATH = path.resolve(__dirname, '..') + '/proto/countryList.proto';
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
var proto = grpc.loadPackageDefinition(packageDefinition).countrylist;
var countries = require('./countries')

function getCountryList(call, callback) {
  callback(null, countries);
}


function main() {
  var server = new grpc.Server();
  server.addService(proto.CountryList.service,
                         {getCountryList: getCountryList});
  server.bindAsync('0.0.0.0:8082', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
