/**
 * Created by Wang on 2016/12/7.
 */

var events = require("events");

var eventsEmitter = new events.EventEmitter();

//监视器一
var listener1 = function listener1() {
    console.log("监视器 listener1 执行");
}

//监视器二
var listener2 = function listener2() {
    console.log("监视器 listener2 执行");
}

// 绑定 connection 事件，处理函数为 listener1
eventsEmitter.addListener("connection", listener1);

// 绑定 connection 事件，处理函数为 listener2
eventsEmitter.on("connection", listener2);

//统计监视器数目
eventsEmitter.on("eventListeners", function () {
    var count = require("events").EventEmitter.listenerCount(eventsEmitter, "connection");
    console.log(count + "个监听器监听连接事件");
})
// 触发 connection 事件
eventsEmitter.emit("connection");

eventsEmitter.emit("eventListeners");

// 移除监绑定的 listener1 函数
eventsEmitter.removeListener("connection", listener1);
console.log("listener1 不再受监听。");

// 触发 connection 事件
eventsEmitter.emit("connection");

eventsEmitter.emit("eventListeners");

console.log("程序执行完毕。");
