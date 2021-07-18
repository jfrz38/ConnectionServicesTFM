/**
 * @fileoverview gRPC-Web generated client stub for countrydata
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.countrydata = require('./CountryData_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.countrydata.CountryDataClient =
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
proto.countrydata.CountryDataPromiseClient =
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
 *   !proto.countrydata.Request,
 *   !proto.countrydata.Response>}
 */
const methodDescriptor_CountryData_GetCountryData = new grpc.web.MethodDescriptor(
  '/countrydata.CountryData/GetCountryData',
  grpc.web.MethodType.UNARY,
  proto.countrydata.Request,
  proto.countrydata.Response,
  /**
   * @param {!proto.countrydata.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.countrydata.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.countrydata.Request,
 *   !proto.countrydata.Response>}
 */
const methodInfo_CountryData_GetCountryData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.countrydata.Response,
  /**
   * @param {!proto.countrydata.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.countrydata.Response.deserializeBinary
);


/**
 * @param {!proto.countrydata.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.countrydata.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.countrydata.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.countrydata.CountryDataClient.prototype.getCountryData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/countrydata.CountryData/GetCountryData',
      request,
      metadata || {},
      methodDescriptor_CountryData_GetCountryData,
      callback);
};


/**
 * @param {!proto.countrydata.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.countrydata.Response>}
 *     Promise that resolves to the response
 */
proto.countrydata.CountryDataPromiseClient.prototype.getCountryData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/countrydata.CountryData/GetCountryData',
      request,
      metadata || {},
      methodDescriptor_CountryData_GetCountryData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.countrydata.Request,
 *   !proto.countrydata.MapResponse>}
 */
const methodDescriptor_CountryData_GetMapData = new grpc.web.MethodDescriptor(
  '/countrydata.CountryData/GetMapData',
  grpc.web.MethodType.UNARY,
  proto.countrydata.Request,
  proto.countrydata.MapResponse,
  /**
   * @param {!proto.countrydata.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.countrydata.MapResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.countrydata.Request,
 *   !proto.countrydata.MapResponse>}
 */
const methodInfo_CountryData_GetMapData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.countrydata.MapResponse,
  /**
   * @param {!proto.countrydata.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.countrydata.MapResponse.deserializeBinary
);


/**
 * @param {!proto.countrydata.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.countrydata.MapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.countrydata.MapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.countrydata.CountryDataClient.prototype.getMapData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/countrydata.CountryData/GetMapData',
      request,
      metadata || {},
      methodDescriptor_CountryData_GetMapData,
      callback);
};


/**
 * @param {!proto.countrydata.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.countrydata.MapResponse>}
 *     Promise that resolves to the response
 */
proto.countrydata.CountryDataPromiseClient.prototype.getMapData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/countrydata.CountryData/GetMapData',
      request,
      metadata || {},
      methodDescriptor_CountryData_GetMapData);
};


module.exports = proto.countrydata;

