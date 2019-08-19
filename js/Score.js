class Score {
 
    constructor(x) {
        this.x = x;
        this.y = 60;

        this.score = 0;

        textSize(50);
        textAlign(CENTER, CENTER);
    }

    display() {
        text(this.score, this.x, this.y);
    }

    increment() {
        this.score++;
    }
}