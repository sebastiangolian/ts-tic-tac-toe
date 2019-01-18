export class Cell {
    constructor(element) {
        this.element = element;
        this.addClickEvent();
    }
    addClickEvent() {
        this.element.addEventListener('click', () => {
            this.eventClick();
        });
    }
    eventClick() {
        console.log("Name is  :   " + this.element.id);
    }
}
