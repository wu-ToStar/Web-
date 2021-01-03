//object表示一个js对象
let a2: object;
a2 = {};
a2 = function () {};

//{}用来指定对象中可以包含哪些属性
//语法：{属性名:属性值,....}
//在属性名后边加上?，表示属性是可选的
let b2: { name: string; age?: number };
b2 = { name: "孙悟空", age: 18 };

//[propName:string]:any 表示任意类型的属性
let c2: { name: string; [propName: string]: any };
c2 = { name: "猪八戒" };

//设置函数结构的类型声明
let d2: (a2: number, b2: number) => number;
d2 = function (x, y) {
  return x + y;
};
d2(1, 2);

//数组
let e: string[];
e = ["a", "b"];

let f: number[];

let g: Array<number>;

//元组，固定长度的数组
let h: [string, number];
h = ["hello", 123];

enum Gender {
  Male = 0,
  Female = 1,
}
let i: { name: string; gender: Gender };
i = {
  name: "孙悟空",
  gender: Gender.Male,
};

console.log(i.gender);

//&表示同时
let j: { name: string } & { age: number };
j = { name: "a", age: 1 };
let k: { name: string; age: number };
k = { name: "a", age: 1 };

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let l: myType;

l = 5;
