// source: CountryData.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.countrydata.MapResponse', null, global);
goog.exportSymbol('proto.countrydata.Request', null, global);
goog.exportSymbol('proto.countrydata.Response', null, global);
goog.exportSymbol('proto.countrydata.Response.obj', null, global);
goog.exportSymbol('proto.countrydata.ResponseData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.countrydata.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.countrydata.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.countrydata.Request.displayName = 'proto.countrydata.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.countrydata.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.countrydata.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.countrydata.Response.displayName = 'proto.countrydata.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.countrydata.Response.obj = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.countrydata.Response.obj, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.countrydata.Response.obj.displayName = 'proto.countrydata.Response.obj';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.countrydata.MapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.countrydata.MapResponse.repeatedFields_, null);
};
goog.inherits(proto.countrydata.MapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.countrydata.MapResponse.displayName = 'proto.countrydata.MapResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.countrydata.ResponseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.countrydata.ResponseData.repeatedFields_, null);
};
goog.inherits(proto.countrydata.ResponseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.countrydata.ResponseData.displayName = 'proto.countrydata.ResponseData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.countrydata.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.countrydata.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.countrydata.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.countrydata.Request}
 */
proto.countrydata.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.countrydata.Request;
  return proto.countrydata.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.countrydata.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.countrydata.Request}
 */
proto.countrydata.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.countrydata.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.countrydata.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.countrydata.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.countrydata.Request.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.countrydata.Request} returns this
 */
proto.countrydata.Request.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.countrydata.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.countrydata.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.countrydata.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.countrydata.Response.obj.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.countrydata.Response}
 */
proto.countrydata.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.countrydata.Response;
  return proto.countrydata.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.countrydata.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.countrydata.Response}
 */
proto.countrydata.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.countrydata.Response.obj;
      reader.readMessage(value,proto.countrydata.Response.obj.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.countrydata.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.countrydata.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.countrydata.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.countrydata.Response.obj.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.countrydata.Response.obj.prototype.toObject = function(opt_includeInstance) {
  return proto.countrydata.Response.obj.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.countrydata.Response.obj} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.Response.obj.toObject = function(includeInstance, msg) {
  var f, obj = {
    confirmed: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recovered: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deaths: jspb.Message.getFieldWithDefault(msg, 3, 0),
    date: jspb.Message.getFieldWithDefault(msg, 4, ""),
    flag: jspb.Message.getFieldWithDefault(msg, 5, ""),
    country: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.countrydata.Response.obj}
 */
proto.countrydata.Response.obj.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.countrydata.Response.obj;
  return proto.countrydata.Response.obj.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.countrydata.Response.obj} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.countrydata.Response.obj}
 */
proto.countrydata.Response.obj.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRecovered(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeaths(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.countrydata.Response.obj.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.countrydata.Response.obj.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.countrydata.Response.obj} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.Response.obj.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfirmed();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRecovered();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDeaths();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFlag();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 confirmed = 1;
 * @return {number}
 */
proto.countrydata.Response.obj.prototype.getConfirmed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.countrydata.Response.obj} returns this
 */
proto.countrydata.Response.obj.prototype.setConfirmed = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 recovered = 2;
 * @return {number}
 */
proto.countrydata.Response.obj.prototype.getRecovered = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.countrydata.Response.obj} returns this
 */
proto.countrydata.Response.obj.prototype.setRecovered = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 deaths = 3;
 * @return {number}
 */
proto.countrydata.Response.obj.prototype.getDeaths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.countrydata.Response.obj} returns this
 */
proto.countrydata.Response.obj.prototype.setDeaths = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string date = 4;
 * @return {string}
 */
proto.countrydata.Response.obj.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.countrydata.Response.obj} returns this
 */
proto.countrydata.Response.obj.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string flag = 5;
 * @return {string}
 */
proto.countrydata.Response.obj.prototype.getFlag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.countrydata.Response.obj} returns this
 */
proto.countrydata.Response.obj.prototype.setFlag = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string country = 6;
 * @return {string}
 */
proto.countrydata.Response.obj.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.countrydata.Response.obj} returns this
 */
proto.countrydata.Response.obj.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional obj data = 1;
 * @return {?proto.countrydata.Response.obj}
 */
proto.countrydata.Response.prototype.getData = function() {
  return /** @type{?proto.countrydata.Response.obj} */ (
    jspb.Message.getWrapperField(this, proto.countrydata.Response.obj, 1));
};


/**
 * @param {?proto.countrydata.Response.obj|undefined} value
 * @return {!proto.countrydata.Response} returns this
*/
proto.countrydata.Response.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.countrydata.Response} returns this
 */
proto.countrydata.Response.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.countrydata.Response.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.countrydata.MapResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.countrydata.MapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.countrydata.MapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.countrydata.MapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.MapResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chartdataList: jspb.Message.toObjectList(msg.getChartdataList(),
    proto.countrydata.ResponseData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.countrydata.MapResponse}
 */
proto.countrydata.MapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.countrydata.MapResponse;
  return proto.countrydata.MapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.countrydata.MapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.countrydata.MapResponse}
 */
proto.countrydata.MapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.countrydata.ResponseData;
      reader.readMessage(value,proto.countrydata.ResponseData.deserializeBinaryFromReader);
      msg.addChartdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.countrydata.MapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.countrydata.MapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.countrydata.MapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.MapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChartdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.countrydata.ResponseData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ResponseData chartData = 1;
 * @return {!Array<!proto.countrydata.ResponseData>}
 */
proto.countrydata.MapResponse.prototype.getChartdataList = function() {
  return /** @type{!Array<!proto.countrydata.ResponseData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.countrydata.ResponseData, 1));
};


/**
 * @param {!Array<!proto.countrydata.ResponseData>} value
 * @return {!proto.countrydata.MapResponse} returns this
*/
proto.countrydata.MapResponse.prototype.setChartdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.countrydata.ResponseData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.countrydata.ResponseData}
 */
proto.countrydata.MapResponse.prototype.addChartdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.countrydata.ResponseData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.countrydata.MapResponse} returns this
 */
proto.countrydata.MapResponse.prototype.clearChartdataList = function() {
  return this.setChartdataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.countrydata.ResponseData.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.countrydata.ResponseData.prototype.toObject = function(opt_includeInstance) {
  return proto.countrydata.ResponseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.countrydata.ResponseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.ResponseData.toObject = function(includeInstance, msg) {
  var f, obj = {
    field1List: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    field2List: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    field3List: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.countrydata.ResponseData}
 */
proto.countrydata.ResponseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.countrydata.ResponseData;
  return proto.countrydata.ResponseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.countrydata.ResponseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.countrydata.ResponseData}
 */
proto.countrydata.ResponseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addField1(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addField2(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addField3(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.countrydata.ResponseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.countrydata.ResponseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.countrydata.ResponseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.countrydata.ResponseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField1List();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getField2List();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = message.getField3List();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * repeated string field1 = 1;
 * @return {!Array<string>}
 */
proto.countrydata.ResponseData.prototype.getField1List = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.setField1List = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.addField1 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.clearField1List = function() {
  return this.setField1List([]);
};


/**
 * repeated uint32 field2 = 2;
 * @return {!Array<number>}
 */
proto.countrydata.ResponseData.prototype.getField2List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.setField2List = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.addField2 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.clearField2List = function() {
  return this.setField2List([]);
};


/**
 * repeated uint32 field3 = 3;
 * @return {!Array<number>}
 */
proto.countrydata.ResponseData.prototype.getField3List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.setField3List = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.addField3 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.countrydata.ResponseData} returns this
 */
proto.countrydata.ResponseData.prototype.clearField3List = function() {
  return this.setField3List([]);
};


goog.object.extend(exports, proto.countrydata);