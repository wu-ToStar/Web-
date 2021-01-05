"use strict";
class Dog {
    constructor(name, age) {
        this.name = "旺财";
        this.age = 4;
        this.name = name;
        this.age = age;
    }
    bark() {
        alert("汪汪汪汪！");
    }
    call(food) {
        console.log("我要吃" + food);
    }
}
const dog = new Dog("小白", 3);
const dog2 = new Dog("小黑", 1);
console.log(dog);
dog.bark();
dog.call("骨头");
