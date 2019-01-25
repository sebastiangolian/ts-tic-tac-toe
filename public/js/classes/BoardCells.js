import { BoardCell } from "./BoardCell.js";
export class BoardCells {
    constructor(board) {
        this.cells = new Array();
        this.board = board;
    }
    addCells(elements) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }
        const l = elements.length;
        for (var i = 0; i < l; i++) {
            let element = elements[i];
            let cell = new BoardCell(element, this.board);
            this.cells.push(cell);
        }
    }
    getCells() {
        return this.cells;
    }
    lockCells() {
        this.cells.forEach((cell) => {
            cell.removeClickEvent();
        });
        this.board.locked = true;
    }
    getCellStatuses() {
        let result = new Array();
        this.cells.forEach(function (cell) {
            result.push(cell.getStatus());
        });
        return result;
    }
}
