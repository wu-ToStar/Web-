"use strict";
class Person {
    constructor(name, age) {
        this.sex = "男";
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log("hello 大家好");
    }
    static Hello() {
        console.log("hello 大家好");
    }
}
Person.height = 178;
const per = new Person("猪八戒", 20);
console.log(Person.height);
console.log(per.sex);
per.sayHello();
Person.Hello();
