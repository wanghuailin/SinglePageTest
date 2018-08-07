/**
 * Created by Wang on 2016/12/8.
 */
function Hello() {
    var name = "";
    this.setName = function (thyName) {
        name = thyName;
    }
    this.sayHello = function () {
        if (name.length <= 0) {
            name = "初始值";
        }
        console.log("Hello " + name);
    }
}
module.exports = Hello;