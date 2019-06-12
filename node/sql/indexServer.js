/**
 * Created by Wang on 2019/6/12.
 */

var dateCRUD = require("./module");
dateCRUD = new dateCRUD();

var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get("/app/select", function (req, res) {
    dateCRUD.Select(function (date) {
        console.log(date);
        res.json({
            data: date
        })
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})