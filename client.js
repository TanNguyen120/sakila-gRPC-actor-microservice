const grpc = require('grpc');
const PROTO_PATH = './actor.proto';
// load file proto để có thể thực hiện protobuf request
const actorService = grpc.load(PROTO_PATH).ActorService;

// client đóng vai trò là một stream trong http 2.0 để gửi request và nhận response
const client = new actorService('127.0.0.1:4000', grpc.credentials.createInsecure());
module.exports = client 