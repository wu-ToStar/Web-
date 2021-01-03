console.log('HELLO TypeScript');

//变量声明
let call: any;

let a: number=1;
//a的值设置了number，使用只能赋值是数字
a = 10001; 

let c: boolean = true;

function sum(a: number, b: number) :number{//函数返回值是number
    return a + b;
    // return a + 'b';//报错
}

sum(123, 456)

// sum(123,"456")//会报错错误