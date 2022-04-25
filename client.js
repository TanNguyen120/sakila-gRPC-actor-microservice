const grpc = require('grpc');
const PROTO_PATH = './actor.proto';
const actorService = grpc.load(PROTO_PATH).ActorService;
const client = new actorService('127.0.0.1:4000', grpc.credentials.createInsecure());
module.exports = client 