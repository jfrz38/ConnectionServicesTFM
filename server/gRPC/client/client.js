const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = '../../../proto/example.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const ExampleService = grpc.loadPackageDefinition(packageDefinition).ExampleService;

const maxSize = {'grpc.max_receive_message_length': 20971520*2 }
const client = new ExampleService(
  "localhost:50051",
  grpc.credentials.createInsecure(),
  maxSize
);

module.exports = client;
