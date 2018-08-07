define(function (require, exports) {
    setTimeout(function () {
        console.log("Loading1");
    }, 2000)
    var demo = require('./loadingSea2.js');
});