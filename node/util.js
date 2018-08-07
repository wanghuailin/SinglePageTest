/**
 * Created by Wang on 2016/12/8.
 */
var util = require("util");

function Base() {
    this.name = "base";
    this.sayHello = function () {
        console.log("Hello " + this.name);
    }
}

Base.prototype.ShowName = function () {
    console.log("Name :" + this.name);
}

function Sub() {
    this.name = "sub";
}
//util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
util.inherits(Sub, Base);

var objBase = new Base();
objBase.sayHello();
objBase.ShowName();
//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
console.log(util.inspect(objBase, true));
var objSub = new Sub();
// objSub.sayHello();
objSub.ShowName();
console.log(util.inspect(objSub));

