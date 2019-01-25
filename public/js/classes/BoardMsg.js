export class BoardMsg {
    constructor(element) {
        this.text = "";
        this.element = element;
    }
    setText(text) {
        this.text = text;
        this.element.innerHTML = this.text;
    }
}
BoardMsg.TEXT_START = "Click on any field if you want start game";
BoardMsg.TEXT_DRAW = "Draw. Try again";
BoardMsg.TEXT_LOSE = "You lose. Try again";
BoardMsg.TEXT_WIN = "You win. Congratulations";
