import { Cell } from "./Cell.js";
import { CheckWin } from "./CheckWin.js";
import { MoveComputer } from "./MoveComputer.js";
export class GameBoard {
    constructor(msg) {
        this.cells = new Array();
        this.locked = false;
        this.msg = msg;
    }
    addCells(elements) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }
        const l = elements.length;
        for (var i = 0; i < l; i++) {
            let cell = new Cell(elements[i], this);
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
        this.locked = true;
    }
    getCellStatuses() {
        let result = new Array();
        this.cells.forEach(function (cell) {
            result.push(cell.getStatus());
        });
        return result;
    }
    checkWin(player) {
        let currentStatusArray = new Array();
        this.cells.forEach(function (cell) {
            currentStatusArray.push(cell.getStatus() == player);
        });
        let checkResult = new CheckWin(currentStatusArray).check();
        if (player == 1 && checkResult) {
            this.msg.setText("Wygrałeś. Gratulacje.");
            this.lockCells();
        }
        if (player == 2 && checkResult) {
            this.msg.setText("Przegrałeś. Spróbuj jeszcze raz.");
            this.lockCells();
        }
        return checkResult;
    }
    moveComputer() {
        let cellNumber = new MoveComputer(this.getCellStatuses()).move();
        if (cellNumber == -1) {
            this.msg.setText("REMIS");
            this.lockCells();
        }
        else {
            this.cells[cellNumber].setStatus(2);
        }
    }
    update() {
        this.checkWin(1);
        if (!this.locked)
            this.moveComputer();
        this.checkWin(2);
    }
}
