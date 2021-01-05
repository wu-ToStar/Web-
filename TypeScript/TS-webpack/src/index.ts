import { hi } from "./hi";
console.log("hi");

function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(123, 456));

console.log(hi);

const obj = { name: "孙悟空",age:33 };
console.log(obj);
obj.age = 18
console.log(obj);

console.log("hi");

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000);
// })
// promise.then((resolve) => {
//     console.log(resolve)
// })
console.log(Promise)