/**
 * Created by Wang on 2016/12/6.
 */

var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello world\n");
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');