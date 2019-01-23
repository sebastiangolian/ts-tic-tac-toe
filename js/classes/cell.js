export class Cell {
    constructor(element, board) {
        this.status = 0;
        this.element = element;
        this.board = board;
        this.addClickEvent();
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
        if (this.status == 0)
            this.element.innerHTML = "[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]";
        if (this.status == 1)
            this.element.innerHTML = "[&nbsp;&nbsp;X&nbsp;&nbsp;]";
        if (this.status == 2)
            this.element.innerHTML = "[&nbsp;&nbsp;O&nbsp;&nbsp;]";
    }
    addClickEvent() {
        this.element.addEventListener('click', () => {
            this.eventClick();
        });
    }
    removeClickEvent() {
        let cloneNode = this.element.cloneNode(true);
        if (this.element.parentNode)
            this.element.parentNode.replaceChild(cloneNode, this.element);
    }
    eventClick() {
        if (this.status == 0) {
            this.element.innerHTML = "[&nbsp;&nbsp;X&nbsp;&nbsp;]";
            this.status = 1;
            this.board.update();
        }
    }
}
