export default class Console {

    constructor(sentence) {
        this.sentence = sentence;
        this.x = windowWidth * 0.2;
        this.y = windowHeight / 2;
        this.width = windowWidth * 0.6;
        this.height = windowHeight / 2;
    }


    draw() {
        this.drawConsole();
        this.displaySentence();
    }

    drawConsole() {
        push();
        // top of console
        stroke(255, 255, 255);
        strokeWeight(1);
        fill(255,255, 255);
        rect(this.x, this.y - 40, this.width, 40);

        fill(0, 0, 0, 150);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }

    displaySentence() {
        this.displayDirectoryPath();
        fill(255, 255, 255);
        text(this.sentence, this.x + 70, this.y + 200);
    }

    displayDirectoryPath() {
        textSize(40);
        fill(100, 255, 100);
        text("C:\\Users\\codeheir\\hacker\\path", this.x + 70, this.y + 100);
    }
}