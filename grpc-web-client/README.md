# GRPC-WEB-CLIENT

Pasos a seguir:

## Compilación

1. Generar ficheros *._pb

    > protoc -I=. helloworld.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

2. Generar /dist/main.js

    > npm install
    > npx webpack client.js

## Ejecución

1. Levantar el servidor

    > node server.js &

2. Levantar el proxy

    > docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.15.0

3. Levantar la web

    > python3 -m http.server 8081 &
