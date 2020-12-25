cd .. && cd grpc/proto && protoc -I=. helloworld.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

cd .. && cd .. && npm install

npx webpack web/client-components.js 
