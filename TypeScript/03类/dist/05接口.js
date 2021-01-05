"use strict";
(() => {
    const obj = {
        name: "to",
        age: 1,
    };
    const obj2 = {
        name: "to",
        age: 25,
        gender: "男"
    };
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log("hi");
        }
    }
})();
