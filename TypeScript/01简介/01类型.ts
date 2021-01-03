//可以使用字面量进行类型声明，值只能是自己
let a1: 10;
a1 = 10;

//可以使用 | 来连接多个类型（联合类型）
let b1: boolean | string;
b1 = "male";
b1 = "female";

let c1: boolean | string;
c1 = true;
c1 = "hello";

//any 表示的是任意类型，相当于关闭了TS的类型检查，会混乱变量形式
let d1: any;
//let c1//相当于let c1:any
d1 = 10;
d1 = "hello";
d1 = true;
//类型是any，可以赋给任意变量
c1=d1

//表示未知类型的值，安全的any
let e1: unknown;
e1 = 10;
e1 = true;

let s1: string;
e1 = "hello";
//报错
// s1 = e1;

if (typeof e1 === "string") {
    s1=e1
}

//类型断言，告诉解析器变量的实际类型
s1=e1 as string



//void用来表示空，没有返回值的函数（undefined）
function fn() {//默认是void
    
}

//never 表示永远不会返回结果
function fu2(): never{
    //报错使用
    throw new Error('报错了！')
}