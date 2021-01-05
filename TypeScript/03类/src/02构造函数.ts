class Dog{
    //
    name: string = "旺财"
    age: number = 4
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
    bark() {
        alert("汪汪汪汪！")
    }
    call(food:string) {
        console.log("我要吃"+food)
    }
}

const dog = new Dog("小白", 3)
const dog2 = new Dog("小黑",1)
console.log(dog)

dog.bark()
dog.call("骨头")
