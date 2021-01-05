"use strict";
function fn(a) {
    return a;
}
let result = fn(10);
let result2 = fn("wdnmd");
console.log(result);
console.log(result2);
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, "hi");
function fn3(a) {
    return a.length;
}
console.log(fn3("11111"));
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass("llc");
