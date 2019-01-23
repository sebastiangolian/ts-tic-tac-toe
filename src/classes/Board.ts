import { BoardCell } from "./BoardCell.js";
import { BoardMsg } from "./BoardMsg.js";
import { CheckWin } from "./CheckWin.js";
import { MoveComputer } from "./MoveComputer.js";

export class Board{
    msg: BoardMsg;
    cells: Array<BoardCell> = new Array<BoardCell>();
    locked: boolean = false;

    constructor(msg: BoardMsg) {
        this.msg = msg;
    }

    addCells(elements: HTMLCollection) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }

        const l = elements.length;
        for (var i = 0; i < l; i++) {
            let cell = new BoardCell(elements[i], this);
            this.cells.push(cell);
        }
    }

    getCells(): Array<BoardCell> {
        return this.cells;
    }

    lockCells(): void {
        this.cells.forEach((cell)=>{
            cell.removeClickEvent();
        })
        this.locked = true;
    }

    getCellStatuses(): number[] {
        let result:number[] = new Array();
        this.cells.forEach(function (cell) {
            result.push(cell.getStatus());
        })

        return result;
    }

    checkWin(player:number): boolean {
        let currentStatusArray:boolean[] = new Array();
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
        let cellNumber:number = new MoveComputer(this.getCellStatuses()).move();
        if(cellNumber == -1){
            this.msg.setText("REMIS");
            this.lockCells();
        }
        else{
            this.cells[cellNumber].setStatus(2);
        }
    }

    update(): void {
        this.checkWin(1);
        if(!this.locked) this.moveComputer();
        this.checkWin(2);
    }
}
