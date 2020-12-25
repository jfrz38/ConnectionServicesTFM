node ./grpc/server/server.js

docker run -d -v "$(pwd)"/grpc/deploy/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.15.0

python3 -m http.server 8080 
