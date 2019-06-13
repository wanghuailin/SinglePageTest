/**
 * Created by Wang on 2016/12/8.
 */

var fs = require("fs");

console.log("准备写入文件！");
fs.writeFile(__dirname + "/output.txt", "青青子衿，悠悠我心", function (error) {
    if (error) return console.error(error.stack);
    console.log("写入文件成功！");
});