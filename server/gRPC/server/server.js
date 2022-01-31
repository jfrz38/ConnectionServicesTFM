const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "../../../proto/example.proto";
var protoLoader = require("@grpc/proto-loader");

const objects = require('../../ObjectsCreation')
objects.createObjects()

process.stdin.resume();
var server = new grpc.Server({'grpc.default_compression_level': 3})
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const exampleProto = grpc.loadPackageDefinition(packageDefinition);

server.addService(exampleProto.ExampleService.service, {
    
    getExample:(call, callback) => {
        callback(null, objects.objects[call.request.size])
    }
});

server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        console.log(`Server running at http://127.0.0.1:${port}`);
        server.start();
    }
);

function generateError(status) {
    let error = new Error()
    error.code = status
    return error
}
