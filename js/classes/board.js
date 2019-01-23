import { CheckWin } from "./CheckWin.js";
import { MoveComputer } from "./MoveComputer.js";
import { BoardCells } from "./BoardCells.js";
export class Board {
    constructor(msg) {
        this.locked = false;
        this.msg = msg;
        this.boardCells = new BoardCells(this);
    }
    checkWin(player) {
        let currentStatusArray = new Array();
        this.boardCells.getCells().forEach(function (cell) {
            currentStatusArray.push(cell.getStatus() == player);
        });
        let checkResult = new CheckWin(currentStatusArray).check();
        if (player == 1 && checkResult) {
            this.msg.setText("Wygrałeś. Gratulacje.");
            this.boardCells.lockCells();
        }
        if (player == 2 && checkResult) {
            this.msg.setText("Przegrałeś. Spróbuj jeszcze raz.");
            this.boardCells.lockCells();
        }
        return checkResult;
    }
    moveComputer() {
        let cellNumber = new MoveComputer(this.boardCells.getCellStatuses()).move();
        if (cellNumber == -1) {
            this.msg.setText("REMIS");
            this.boardCells.lockCells();
        }
        else {
            this.boardCells.getCells()[cellNumber].setStatus(2);
        }
    }
    update() {
        this.checkWin(1);
        if (!this.locked)
            this.moveComputer();
        this.checkWin(2);
    }
}
