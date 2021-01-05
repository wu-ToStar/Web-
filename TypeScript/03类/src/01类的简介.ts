class Person {
  //实例属性
  name: string;
  age: number;

  //类型和属性值必须声明，且只读
  readonly sex: string = "男";
  //只能由类来调用，静态属性
  static height: number = 178;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //实例方法
  sayHello() {
    console.log("hello 大家好");
  }
  //静态方法
  static Hello() {
    console.log("hello 大家好");
  }
}

const per = new Person("猪八戒", 20);

console.log(Person.height);
console.log(per.sex);

per.sayHello();
Person.Hello();
