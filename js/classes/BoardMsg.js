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
