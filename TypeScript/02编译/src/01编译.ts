let a = 1
//tsc xxx.ts -w
let b = 2

//创建一个tsconfig.json配置文件
//tsc
//tsc -w


// import { hi } from './index.js'
// console.log(hi)

function fn(a:number, b:number) {
    return a + b;
}

function fn2(this:Window) {
    alert(this)
}

let box1 = document.getElementById("box1");
//有就执行
box1?.addEventListener("click", function () {
    alert("hello")
})