/**
 * Created by Wang on 2016/12/7.
 */

// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("someevent", function (arg1, arg2) {
    console.log("listener1", arg1, arg2);
})

eventEmitter.on("someevent", function (arg1, arg2, arg3) {
    console.log("listener1", arg1, arg2, arg3);
})

eventEmitter.emit("someevent", "参数一", "参数二");
