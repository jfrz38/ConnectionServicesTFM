# Matar los procesos en los puertos 8081 y 9090

# lsof -i :9091

x=`lsof -Fp -i:8081`
kill -9 ${x##p}
x=`lsof -Fp -i:9090`
kill -9 ${x##p}

protoc -I=. helloworld.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

npm install
npx webpack client.js

node server.js &
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.15.0
python3 -m http.server 8081 &
