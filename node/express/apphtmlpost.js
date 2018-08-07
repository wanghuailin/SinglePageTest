/**
 * Created by Wang on 2016/12/9.
 */

var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get("/post.html", function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "post.html");
})

app.post("/process_post", urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    response = {
        first_name: req.body.first_name,
        second_name: req.body.second_name,
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})