const {HelloRequest, HelloReply} = require('./helloworld_pb.js');
const {GreeterClient} = require('./helloworld_grpc_web_pb.js');

var client = new GreeterClient('http://' + window.location.hostname + ':8080', null, null);//GreeterClient('http://localhost:8081');
console.log("client creado: ",client)
var request = new HelloRequest();
console.log("request creado: ",request)
request.setName('World');

console.log("Antes");
client.sayHello(request, {}, (err, response) => {
  if(err) console.log(err)
  else console.log(response.getMessage()+" from grpc-web-client");
});
