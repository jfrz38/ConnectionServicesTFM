var path = require('path');
var PROTO_PATH = path.resolve(__dirname, '..') + '/proto/list.proto';
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

console.log("list = ",list)
//console.log("list.List = ",list.List)
var server = new grpc.Server();

server.addService(list.List.service, {
  getElements: (call, callback) => {
    console.log("Entra doGetElements")
    console.log("not found = ",grpc.status.NOT_FOUND)
    callback(null, {
    list: [
      "gRPC element 1",
      "gRPC element 2",
      "gRPC element 3",
      "gRPC element 4",
    ]
  });
  }
});
/*
server.bind("127.0.0.1:6110", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:6110");
server.start();*/

server.bindAsync(
  '0.0.0.0:6110', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if(err) console.log("error = ",err)
    else server.start();
  });

