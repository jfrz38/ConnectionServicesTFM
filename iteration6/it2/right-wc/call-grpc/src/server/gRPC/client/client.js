var path = require('path');
var PROTO_PATH = path.resolve(__dirname, '..') + '/proto/list.proto';
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
var List = grpc.loadPackageDefinition(packageDefinition).list.List;

const client = new List(
    "localhost:6110",
    grpc.credentials.createInsecure()
);
module.exports = client;
