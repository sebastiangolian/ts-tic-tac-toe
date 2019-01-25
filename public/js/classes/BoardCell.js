export class BoardCell {
    constructor(element, board) {
        this.status = 0;
        this.nullSrc = "public/images/null.png";
        this.xSrc = "public/images/x.png";
        this.oSrc = "public/images/o.png";
        this.eventClick = () => {
            if (this.status == 0) {
                this.element.src = this.nullSrc;
                this.setStatus(1);
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
            this.element.src = this.nullSrc;
        if (this.status == 1)
            this.element.src = this.xSrc;
        if (this.status == 2)
            this.element.src = this.oSrc;
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
