(() => {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    say() {
      console.log("动物叫声！！！");
    }
  }
  //继承
    class Dog extends Animal {
        sex: string;
        constructor(name:string,age:number,sex:string) {
            super(name, age)
            this.sex=sex
            
      }

      say() {
        // super.say();
        console.log("汪汪汪汪！");
      }
      run() {
          console.log(`${this.name}在跑~~~`)
      }
  }
  //继承
  class Cat extends Animal {
    say() {
      console.log("喵喵喵！");
    }
  }

  const dog = new Dog("旺财", 5,"公");
  console.log(dog);
    dog.say();
    dog.run()

  const cat = new Cat("茗茗", 2);
  console.log(cat);
  cat.say();
})();
