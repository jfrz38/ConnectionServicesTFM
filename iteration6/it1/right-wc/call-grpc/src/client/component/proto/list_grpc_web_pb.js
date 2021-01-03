/**
 * @fileoverview gRPC-Web generated client stub for list
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.list = require('./list_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.list.ListClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.list.ListPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.list.Request,
 *   !proto.list.Response>}
 */
const methodDescriptor_List_GetElements = new grpc.web.MethodDescriptor(
  '/list.List/GetElements',
  grpc.web.MethodType.UNARY,
  proto.list.Request,
  proto.list.Response,
  /**
   * @param {!proto.list.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.list.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.list.Request,
 *   !proto.list.Response>}
 */
const methodInfo_List_GetElements = new grpc.web.AbstractClientBase.MethodInfo(
  proto.list.Response,
  /**
   * @param {!proto.list.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.list.Response.deserializeBinary
);


/**
 * @param {!proto.list.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.list.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.list.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.list.ListClient.prototype.getElements =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/list.List/GetElements',
      request,
      metadata || {},
      methodDescriptor_List_GetElements,
      callback);
};


/**
 * @param {!proto.list.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.list.Response>}
 *     Promise that resolves to the response
 */
proto.list.ListPromiseClient.prototype.getElements =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/list.List/GetElements',
      request,
      metadata || {},
      methodDescriptor_List_GetElements);
};


module.exports = proto.list;

