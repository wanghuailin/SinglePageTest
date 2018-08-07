define(function (require, exports) {
    setTimeout(function () {
        console.log("Loading2");
    }, 2000)
    var demo = require('./loadingSea3.js');
});