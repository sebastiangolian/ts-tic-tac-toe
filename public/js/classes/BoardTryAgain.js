export class BoardTryAgain {
    constructor(element, board) {
        this.eventClick = () => {
            this.board.reset();
        };
        this.element = element;
        this.board = board;
        this.addClickEvent();
    }
    addClickEvent() {
        this.element.addEventListener('click', this.eventClick);
    }
}
