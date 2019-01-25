export class BoardCell {
    constructor(element, board) {
        this.status = 0;
        this.eventClick = () => {
            if (this.status == 0) {
                this.element.src = "images/x.png";
                this.status = 1;
                this.board.update();
            }
        };
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
            this.element.src = "images/null.png";
        if (this.status == 1)
            this.element.src = "images/x.png";
        if (this.status == 2)
            this.element.src = "images/o.png";
    }
    reset() {
        this.setStatus(0);
        this.addClickEvent();
    }
    addClickEvent() {
        this.element.addEventListener('click', this.eventClick);
    }
    removeClickEvent() {
        this.element.removeEventListener('click', this.eventClick);
    }
}
