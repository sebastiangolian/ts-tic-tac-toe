import { BoardMsg } from "./BoardMsg.js";
import { CheckWin } from "./CheckWin.js";
import { MoveComputer } from "./MoveComputer.js";
import { BoardCells } from "./BoardCells.js";
import { Statistics, StatisticsStorage } from "./Statistics.js";
export class Board {
    constructor(msg) {
        this.locked = false;
        this.msg = msg;
        this.msg.setText(BoardMsg.TEXT_START);
        this.boardCells = new BoardCells(this);
    }
    checkWin(player) {
        let currentStatusArray = new Array();
        this.boardCells.getCells().forEach(function (cell) {
            currentStatusArray.push(cell.getStatus() == player);
        });
        let checkResult = new CheckWin(currentStatusArray).check();
        if (player == 1 && checkResult) {
            this.msg.setText(BoardMsg.TEXT_WIN);
            Statistics.getInstance().update(StatisticsStorage.WIN);
            this.boardCells.lockCells();
        }
        if (player == 2 && checkResult) {
            this.msg.setText(BoardMsg.TEXT_LOSE);
            Statistics.getInstance().update(StatisticsStorage.LOSE);
            this.boardCells.lockCells();
        }
        return checkResult;
    }
    moveComputer() {
        let cellNumber = new MoveComputer(this.boardCells.getCellStatuses()).move();
        if (cellNumber == -1) {
            this.msg.setText(BoardMsg.TEXT_DRAW);
            Statistics.getInstance().update(StatisticsStorage.DRAW);
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
    reset() {
        this.msg.setText(BoardMsg.TEXT_START);
        this.boardCells.getCells().forEach((cell) => {
            cell.reset();
        });
        this.locked = false;
    }
}
