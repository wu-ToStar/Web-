"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get Name() {
            return this._name;
        }
        set Name(value) {
            this._name = value;
        }
        get Age() {
            return this._age;
        }
        set Age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    class Man extends Person {
        test() {
            console.log(this._age);
        }
    }
    const per = new Person("孙悟空", 18);
    per.Age = -9;
    per.Name = "六耳";
    console.log(per.Name);
    console.log(per.Age);
    const man = new Man("猪八戒", 20);
    console.log(man.test());
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("thin", 10001);
    console.log(c);
})();
