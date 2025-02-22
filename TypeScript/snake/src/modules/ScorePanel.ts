class ScorePanel {
    score: number = 0;
    level: number = 1;
    scoreElement!: HTMLElement;
    levelElement!: HTMLElement;
    maxLevel: number;
    upScore:number

    constructor(maxLevel:number=10,upScore:number=10) {
        this.scoreElement = document.getElementById('score')!
        this.levelElement = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore=upScore
    }

    addScore() {
        this.scoreElement.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) [
            this.levelElement.innerHTML=++this.level+''
        ]
        
    }
}

export default ScorePanel