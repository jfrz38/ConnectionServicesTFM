# APLICACIÓN DE PRUEBA CON WEB COMPONENTS

## Ejecución gRPC

1. Crear los ficheros:
- protoc -I=. list.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

- npx webpack wc-interface.js 

2. Levantar servicios
- node ./grpc/server/server.js

- docker run -d -v "$(pwd)"/grpc/deploy/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.15.0

- python3 -m http.server 8080 
