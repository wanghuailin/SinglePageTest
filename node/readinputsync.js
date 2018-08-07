/**
 * Created by Wang on 2016/12/7.
 */

var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());

console.log("读取文件结束");