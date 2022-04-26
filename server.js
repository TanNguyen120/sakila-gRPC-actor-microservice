const grpc = require('grpc');
const model = require('./model');
// load proto file
const actorProto = grpc.load('actor.proto');

// tạo server gRPC
const server = new grpc.Server();
// ta định nghĩa các service trong file actor.proto
server.addService(actorProto.ActorService.service, {
    // định nghĩa cho method list của service ActorService
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
    // định nghĩa cho method get của service ActorService
    get: (call, callback) => {
        try {
            // sử dụng knex để trả về actor theo id
            model.knexObj.select('first_name', 'last_name')
                .from('actor')
                .where('actor_id', call.request.id)
                .then(rows => {
                    callback(null, rows[0]);
                })
        } catch (error) {
            console.error(error);
        }
    },
    // định nghĩa cho method create của service ActorService
    create: (call, callback) => {
        try {
            // sử dụng knex để tạo actor
            // call.request tương đương với req message trong rest api
            model.knexObj('actor')
                .insert({ first_name: call.request.first_name, last_name: call.request.last_name })
                .then(rows => {
                    const result = { rows: 'created at: ' + rows };
                    // callback là tương đương res message trong rest api
                    callback(null, result);
                })
        } catch (error) {
            console.error(error);
        }
    },
    // định nghĩa cho method update của service ActorService
    update: (call, callback) => {
        try {
            // sử dụng knex để update actor theo id
            model.knexObj('actor')
                .update({ first_name: call.request.first_name, last_name: call.request.last_name })
                .where('actor_id', call.request.actor_id)
                .then(rows => {
                    const result = { rows: 'updated at: ' + rows };
                    callback(null, result);
                })
        } catch (error) {
            console.error(error);
        }
    },
    // định nghĩa cho method delete của service ActorService
    delete: (call, callback) => {
        try {
            // sử dụng knex để xóa actor theo id
            model.knexObj('actor')
                .where('actor_id', call.request.id)
                .del()
                .then(rows => {
                    const result = { rows: 'deleted at: ' + rows };
                    callback(null, result);
                })
        } catch (error) {
            console.error(error);
        }

    }
})
server.bind('127.0.0.1:4000', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:4000');
server.start();