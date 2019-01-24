export class BoardMsg{
    private element: HTMLElement;
    private text:string = "";

    static readonly TEXT_START = "Click on any field if you want start game";
    static readonly TEXT_DRAW = "Draw. Try again";
    static readonly TEXT_LOSE = "You lose. Try again";
    static readonly TEXT_WIN = "You win. Congratulations";

    constructor(element: HTMLElement) {
        this.element = element;
    }

    setText(text:string): void
    {
        this.text = text;
        this.element.innerHTML = this.text;
    }
}