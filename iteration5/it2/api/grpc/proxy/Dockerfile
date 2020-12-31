# docker run -d -v "$(pwd)"/grpc/deploy/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.15.0

FROM envoyproxy/envoy:v1.15.0

VOLUME "$(pwd)"/grpc/deploy/envoy.yaml:/etc/envoy/envoy.yaml:ro

