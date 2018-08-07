/**
 * Created by Wang on 2018/6/21.
 */


define(function (require, exports) {
    var demo = require('./demo.js');
    var str = demo.getStr('test');
    exports.msg = 'the res is:' + str;
});