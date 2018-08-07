/**
 * Created by Wang on 2018/6/20.
 */
"use strict";
//tsc --module amd TypeScript/animal.ts
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.show = function () {
        console.log(this.name);
        return this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map