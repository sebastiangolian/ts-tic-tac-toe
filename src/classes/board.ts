import { Cell } from "./Cell.js";
import { Msg } from "./Msg.js";
import { CheckWin } from "./CheckWin.js";
import { MoveComputer } from "./MoveComputer.js";

export class Board{
    msg: Msg;
    cells: Array<Cell> = new Array<Cell>();

    constructor(msg: Msg) {
        this.msg = msg;
    }

    addCells(elements: HTMLCollection) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }

        const l = elements.length;
        for (var i = 0; i < l; i++) {
            let cell = new Cell(elements[i], this);
            this.cells.push(cell);
        }
    }

    getCells(): Array<Cell> {
        return this.cells;
    }

    getCurrentStatus(): number[] {
        let result:number[] = new Array(9);
        this.cells.forEach(function (cell) {
            result.push(cell.getStatus());
        })

        return result;
    }

    update(): void {
        if (this.checkWin(1)) {
            this.msg.setText("Wygrałeś. Gratulacje.");
        }
        else {
            if (this.checkWin(2)) {
                this.msg.setText("Przegrałeś. Spróbuj jeszcze raz.");
            }
            else {
                this.msg.setText("Zaznaczono element");
                this.moveComputer();
            }
        }
    }

    checkWin(player:number): boolean {
        
        let currentStatusArray:boolean[] = new Array();
        this.cells.forEach(function (cell) {
            currentStatusArray.push(cell.getStatus() == player);
        });

        let checkWin = new CheckWin(currentStatusArray);
        return checkWin.check();
    }

    moveComputer() {
        let cellNumber:number = new MoveComputer(this.getCurrentStatus()).move();
        this.cells[cellNumber].setStatus(2);
    }
}
