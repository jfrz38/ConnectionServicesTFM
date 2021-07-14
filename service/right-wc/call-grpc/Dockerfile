FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install
COPY ./src /app/src

# Download proto zip
ENV PROTOC_ZIP=protoc-3.14.0-linux-x86_64.zip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.14.0/${PROTOC_ZIP}
RUN unzip -o ${PROTOC_ZIP} -d ./proto 
RUN chmod 755 -R ./proto/bin
ENV BASE=/usr
# Copy into path
RUN cp ./proto/bin/protoc ${BASE}/bin/
RUN cp -R ./proto/include/* ${BASE}/include/

# Download protoc-gen-grpc-web
ENV GRPC_WEB=protoc-gen-grpc-web-1.2.1-linux-x86_64
ENV GRPC_WEB_PATH=/usr/bin/protoc-gen-grpc-web
RUN curl -OL https://github.com/grpc/grpc-web/releases/download/1.2.1/${GRPC_WEB}
# Copy into path
RUN mv ${GRPC_WEB} ${GRPC_WEB_PATH}
RUN chmod +x ${GRPC_WEB_PATH}
RUN rm -rf ${PROTOC_ZIP}
RUN rm -rf ./proto
#Generate proto web
#RUN protoc -I=./src/server/gRPC/proto/ list.proto --js_out=import_style=commonjs,binary:./src/client/component/proto/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/client/component/proto/
#Generate proto gateway
#Download protoc-gen-grpc-gateway
ENV URL=https://github.com/grpc-ecosystem/grpc-gateway/releases/download/v2.1.0
ENV GATEWAY=protoc-gen-grpc-gateway-v2.1.0-linux-x86_64
RUN curl -OL ${URL}/${GATEWAY}
RUN mv ${GATEWAY} protoc-gen-grpc-gateway
RUN chmod +x protoc-gen-grpc-gateway
RUN mv protoc-gen-grpc-gateway ${BASE}/bin/
#Download OpenAPI
ENV OPENAPI=protoc-gen-openapiv2-v2.1.0-linux-x86_64
RUN curl -LO ${URL}/${OPENAPI}
RUN mv ${OPENAPI} protoc-gen-openapiv2
RUN chmod +x protoc-gen-openapiv2
RUN mv protoc-gen-openapiv2 ${BASE}/bin/
# Download annotation.proto
RUN curl -LO https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto
RUN mkdir ${BASE}/include/google/api/
RUN mv annotations.proto ${BASE}/include/google/api/
# Download http.proto
RUN curl -LO https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto
RUN mv http.proto ${BASE}/include/google/api/
# Add /include to PATH
RUN export PATH="${BASE}/include/:$PATH"

RUN protoc -I=./src/server/gRPC/proto list.proto --grpc-gateway_out ./src/client/component/proto/ --grpc-gateway_opt logtostderr=true --grpc-gateway_opt paths=source_relative --grpc-gateway_opt generate_unbound_methods=true

RUN npx webpack src/client/client.js --output ./dist/client.js

EXPOSE 6205
CMD [ "npm", "start" ]
