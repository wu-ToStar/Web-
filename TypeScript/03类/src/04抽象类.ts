(() => {
    //抽象类就是用来被继承的类，禁止被创建对象
  abstract class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
        //抽象方法，子类必须重写
      abstract say(): void;
  }
  //继承
  class Dog extends Animal {
    sex: string;
    constructor(name: string, age: number, sex: string) {
      super(name, age);
      this.sex = sex;
    }

    say() {
      console.log("汪汪汪汪！");
    }
    run() {
      console.log(`${this.name}在跑~~~`);
    }
  }
  //继承
  class Cat extends Animal {
    say() {
      console.log("喵喵喵！");
    }
  }

    const dog = new Dog("旺财", 5, "公");
    console.log(dog);
    

  const cat = new Cat("茗茗", 2);
})();
