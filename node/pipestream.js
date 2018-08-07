/**
 * Created by Wang on 2016/12/8.
 */

var fs = require("fs");

var readerStream = fs.createReadStream("input.txt")

var writestream = fs.createWriteStream("output.txt");

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writestream);
console.log("程序执行完毕！");