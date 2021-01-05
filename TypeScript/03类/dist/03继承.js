"use strict";
(() => {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log("动物叫声！！！");
        }
    }
    class Dog extends Animal {
        constructor(name, age, sex) {
            super(name, age);
            this.sex = sex;
        }
        say() {
            console.log("汪汪汪汪！");
        }
        run() {
            console.log(`${this.name}在跑~~~`);
        }
    }
    class Cat extends Animal {
        say() {
            console.log("喵喵喵！");
        }
    }
    const dog = new Dog("旺财", 5, "公");
    console.log(dog);
    dog.say();
    dog.run();
    const cat = new Cat("茗茗", 2);
    console.log(cat);
    cat.say();
})();
