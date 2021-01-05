//在定义函数或是类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a: T): T{
    return a
}

let result=fn(10)//不指定泛型，TS可以自动对类型进行殴打
let result2 = fn<string>("wdnmd")//指定泛型
console.log(result);
console.log(result2)




//泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T{
    console.log(b)
    return a
}
fn2<number, string>(123, "hi") 



interface Inter{
    length: number;
}

function fn3<T extends Inter>(a: T): number{//必须实现Inter的要求
    return a.length
}

console.log(fn3("11111"))




class MyClass<T>{
    name: T
    constructor(name: T) {
        this.name=name
    }
}

const mc=new MyClass<string>("llc")