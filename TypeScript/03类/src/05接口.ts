(() => {
    type myType = {
        name: string;
        age: number;
    };

    const obj: myType = {
        name: "to",
        age: 1,
    };
    /**
     *  接口可以在定义的时候去限制类的结构
     *      接口的所有的属性都不能有实际的值
     *      接口只定义对象的结构，而不考虑实际值
     *          在接口中所有的方法都是抽象方法
     */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string
    }
    const obj2: myInterface = {
        name: "to",
        age: 25,
        gender: "男"
    };

    /**
     * 定义类时，可以使类去实现有关接口
     *  实现接口就是满足接口的需求
     * 
     */
    interface my{
        name: string;
        say():void
    }

    class MyClass implements my{
        name: string
        
        constructor(name: string) {
            this.name=name
        }

        say() {
            console.log("hi")
        }
    }
})();
