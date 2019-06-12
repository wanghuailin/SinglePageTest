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

//可以跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get("/app/select", function (req, res) {
    dateCRUD.Select(function (date) {
        res.json({
            data: date
        })
    });
})

app.get("/app/add", function (req, res) {
    dateCRUD.Add(req.query.num, req.query.name, req.query.count, function (date) {
        res.json({
            data: date
        })
    });
})

app.get("/app/delete", function (req, res) {
    dateCRUD.Delete(req.query.num, function (date) {
        res.json({
            data: date
        })
    });
})

app.get("/app/update", function (req, res) {
    dateCRUD.Update(req.query.num, req.query.name, req.query.count, function (date) {
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