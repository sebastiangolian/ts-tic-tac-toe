import { Cell } from "./cell.js";
export class Board {
    constructor() {
        this.msgElement = null;
        this.cells = new Array();
    }
    addCells(elements) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }
        const l = elements.length;
        for (var i = 0; i < l; i++) {
            let cell = new Cell(elements[i]);
            cell.setBoard(this);
            this.cells.push(cell);
        }
    }
    getCells() {
        return this.cells;
    }
    setMsgElement(element) {
        this.msgElement = element;
    }
    update() {
        if (this.msgElement instanceof HTMLElement) {
            if (this.checkWin()) {
                this.msgElement.innerHTML = "Wygrałeś. Gratulacje.";
            }
            else {
                this.msgElement.innerHTML = "Zaznaczono element";
            }
        }
    }
    checkWin() {
        if (this.cells[0].getStatus() == 1 && this.cells[1].getStatus() == 1 && this.cells[2].getStatus() == 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
