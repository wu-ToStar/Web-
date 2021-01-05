import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = "";
    isLive = true

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.snake = new Snake();

        this.init();
    }

    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this)); //bind绑定自己
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        //判断是否吃到食物
        this.checkEat(X, Y)

        //检测撞墙并处理
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e.message)
            this.isLive = false
        }
        //开启定时器，让🐍运动
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)

    }

    checkEat(X: number, Y: number) {
        if (X === this.food.X && this.food.Y === Y) {
            console.log('EAT');
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl;
