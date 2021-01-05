class Food {
    element: HTMLElement;
    constructor() {
        //获取页面中的food
        this.element = document.getElementById('food')!;

    }
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.top = top + "px"
        this.element.style.left = left + "px"
    }
}

// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
export default Food;