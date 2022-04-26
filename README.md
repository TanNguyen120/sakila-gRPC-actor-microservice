# sakila-gRPC-actor-microservice


demo đơn giản một gRPC server có chức năng thực hiện chức năng CRUD cho table actor của database sakila


** HƯỚNG DẪN **
- Vui lòng cấu hình account và password mysql theo như trong file model.js


- Data base được sử dụng là data base có sẵn trong my sql (trong trường hợp máy không có sẵn data base xin vui lòng tạo mới data base có tên sakila và chỉ cần tạo một bảng actor với các cột như dòng lệnh model.knex trong file server.js)

- Để có thể sử dụng service này thì phía client phải cài file actor.proto vào và tiến hành load file đó lên

- Để biết thêm về tên và các arg của các service xem trong phần định nghĩa ở file server


- gõ lệnh npm start để run server
