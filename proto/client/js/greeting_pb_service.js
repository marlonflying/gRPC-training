// package: proto
// file: greeting.proto

var greeting_pb = require("./greeting_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Greeter = (function () {
  function Greeter() {}
  Greeter.serviceName = "proto.Greeter";
  return Greeter;
}());

Greeter.SayHello = {
  methodName: "SayHello",
  service: Greeter,
  requestStream: false,
  responseStream: false,
  requestType: greeting_pb.HelloRequest,
  responseType: greeting_pb.HelloReplay
};

Greeter.SayHelloAgain = {
  methodName: "SayHelloAgain",
  service: Greeter,
  requestStream: false,
  responseStream: false,
  requestType: greeting_pb.HelloRequest,
  responseType: greeting_pb.HelloReplay
};

exports.Greeter = Greeter;

function GreeterClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GreeterClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Greeter.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

GreeterClient.prototype.sayHelloAgain = function sayHelloAgain(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Greeter.SayHelloAgain, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GreeterClient = GreeterClient;

