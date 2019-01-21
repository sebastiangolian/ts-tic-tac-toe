export class Msg{
    private element: HTMLElement;
    private text:string = "";
    
    constructor(element: HTMLElement) {
        this.element = element;
    }

    setText(text:string): void
    {
        this.text = text;
        this.element.innerHTML = this.text;
    }
}