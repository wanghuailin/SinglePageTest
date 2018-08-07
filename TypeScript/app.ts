import {Animal} from './animal';
let dog = new Animal();
dog.name = '狗狗';
dog.show();

// require(['./animal'], function (animal_1) {
//     let dog = new animal_1.Animal();
//     dog.name = '狗狗';
//     dog.show();
// });