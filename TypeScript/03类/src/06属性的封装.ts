(() => {
    class Person {
        /**
         *  public 公共的 默认值
         * 
         *  private 私有的 ,作用在类里，只能在内部访问
         *  
         * protected 只能在当前类和子类中访问
         */

        private _name: string;
        protected _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         * getter 方法用来读取属性
         * setter方法用来设置属性
         *              它们被称为属性的存储器
         */

        get Name() {
            return this._name;
        }

        set Name(value: string) {
            this._name = value;
        }

        get Age() {
            return this._age;
        }

        set Age(value: number) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }

    class Man extends Person {
        test() {
            console.log(this._age)
        }
    }
    const per = new Person("孙悟空", 18);

    per.Age = -9;
    per.Name = "六耳";
    console.log(per.Name);
    console.log(per.Age);

    const man=new Man("猪八戒",20)
    console.log(man.test());

    //简化
    class C{
        //可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {
            
        }
    }
    const c=new C("thin",10001)
    console.log(c)
})();
