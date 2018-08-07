/**
 * Created by Wang on 2016/12/8.
 */

var fs = require("fs");
var data = "青青子衿，悠悠我心";
// 创建一个可以写入的流，写入到文件 output.txt 中
var writestream = fs.createWriteStream("output.txt");
// 使用 utf8 编码写入数据
writestream.write(data, "UTF-8");
// 标记文件末尾
writestream.end();
writestream.on("finish", function () {
    console.log("写入完成！");
})
writestream.on("error", function (err) {
    console.log(err.stack);
})

console.log("程序执行完毕！");


