const grpc = require('grpc');
const notesProto = grpc.load('actor.proto');
const server = new grpc.Server();
server.bind('127.0.0.1:4000', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:4000');
server.start();