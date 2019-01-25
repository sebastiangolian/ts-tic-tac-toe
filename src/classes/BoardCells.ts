import { BoardCell } from "./BoardCell.js";
import { Board } from "./Board.js";

export class BoardCells {
    board:Board;
    cells: Array<BoardCell> = new Array<BoardCell>();

    constructor(board:Board) {
        this.board = board;
    }

    addCells(elements: HTMLCollection) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }

        const l = elements.length;
        for (var i = 0; i < l; i++) {
            let element = elements[i] as HTMLImageElement
            let cell = new BoardCell(element, this.board);
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
        this.board.locked = true;
    }

    getCellStatuses(): number[] {
        let result:number[] = new Array();
        this.cells.forEach(function (cell) {
            result.push(cell.getStatus());
        })

        return result;
    }
}