// package: proto
// file: greeting.proto

import * as greeting_pb from "./greeting_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GreeterSayHello = {
  readonly methodName: string;
  readonly service: typeof Greeter;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof greeting_pb.HelloRequest;
  readonly responseType: typeof greeting_pb.HelloReplay;
};

type GreeterSayHelloAgain = {
  readonly methodName: string;
  readonly service: typeof Greeter;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof greeting_pb.HelloRequest;
  readonly responseType: typeof greeting_pb.HelloReplay;
};

export class Greeter {
  static readonly serviceName: string;
  static readonly SayHello: GreeterSayHello;
  static readonly SayHelloAgain: GreeterSayHelloAgain;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GreeterClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: greeting_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: greeting_pb.HelloReplay|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: greeting_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: greeting_pb.HelloReplay|null) => void
  ): UnaryResponse;
  sayHelloAgain(
    requestMessage: greeting_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: greeting_pb.HelloReplay|null) => void
  ): UnaryResponse;
  sayHelloAgain(
    requestMessage: greeting_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: greeting_pb.HelloReplay|null) => void
  ): UnaryResponse;
}

