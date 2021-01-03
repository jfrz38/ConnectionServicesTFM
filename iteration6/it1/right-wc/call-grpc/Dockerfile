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

RUN protoc -I=./src/server/gRPC/proto/ list.proto --js_out=import_style=commonjs,binary:./src/client/component/proto/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/client/component/proto/

RUN npx webpack src/client/client.js --output ./dist/client.js
# RUN npx webpack --config myWebpackConfig.js

EXPOSE 6110
CMD [ "npm", "start" ]
