/**
 * Created by Wang on 2016/12/7.
 */
var fs = require("fs");

fs.readFile("input.txt", function (error, date) {
    if (error) return console.log(error.stack);

    console.log(date.toString());
})

console.log("异步读取文件！");