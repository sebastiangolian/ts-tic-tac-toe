import { Board } from "./board.js";
export class Cell {
    constructor(element) {
        this.status = 0;
        this.board = new Board();
        this.element = element;
        this.addClickEvent();
    }
    setBoard(board) {
        this.board = board;
    }
    getStatus() {
        return this.status;
    }
    addClickEvent() {
        this.element.addEventListener('click', () => {
            this.eventClick();
        });
    }
    eventClick() {
        if (this.status == 0) {
            this.element.innerHTML = "[&nbsp;&nbsp;X&nbsp;&nbsp;]";
            this.status = 1;
            this.board.update();
        }
    }
}
