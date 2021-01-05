class Snake {
    snake_head: HTMLElement;
    snake_body: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("snake")!;
        this.snake_head = document.querySelector("#snake > div") as HTMLElement;
        this.snake_body = document
            .getElementById("snake")!
            .getElementsByTagName("div");
    }

    get X() {
        return this.snake_head.offsetLeft;
    }
    get Y() {
        return this.snake_head.offsetTop;
    }

    //撞墙测试
    set X(value: number) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER！！");
        }
        //改变方向
        if (this.snake_body[1] && (this.snake_body[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody();

        this.snake_head.style.left = value + "px";

        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER！！");
        }
        //改变方向
        if (this.snake_body[1] && (this.snake_body[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody();

        this.snake_head.style.top = value + "px";

        this.checkHeadBody()
    }
    //增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
    //身体移动的方法
    moveBody() {
        //位置一个一个往前传

        for (let i = this.snake_body.length - 1; i > 0; i--) {
            let X = (this.snake_body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.snake_body[i - 1] as HTMLElement).offsetTop;

            (this.snake_body[i] as HTMLElement).style.left = X + "px";
            (this.snake_body[i] as HTMLElement).style.top = Y + "px";
        }
        
    }
    //撞到自己
    checkHeadBody(){
        for (let i = 1; i < this.snake_body.length; i++){
            let body=(this.snake_body[i] as HTMLElement)
            if (this.X === body.offsetLeft && this.Y === body.offsetTop)  {
                throw new Error("hurt self！！！");
                
            }
        }
    }
}

export default Snake;
