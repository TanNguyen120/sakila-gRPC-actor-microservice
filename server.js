const grpc = require('grpc');
const model = require('./model');
// load proto file
const actorProto = grpc.load('actor.proto');

// tạo server gRPC
const server = new grpc.Server();
// ta thêm 2 service ở file proto vào bằng đoạn code dưới
server.addService(actorProto.ActorService.service, {
    list: (_, callback) => {
        try {
            // sử dụng knex để trả về list actor
            model.knexObj.select('first_name', 'last_name').from('actor').then(rows => {

                callback(null, rows);
            })
        } catch (error) {
            console.error(error);
        }
    },
})
server.bind('127.0.0.1:4000', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:4000');
server.start();