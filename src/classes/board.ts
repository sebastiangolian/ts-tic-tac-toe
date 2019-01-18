import { Cell } from "./cell.js";

export class Board {
    cells: Array<Cell> = new Array<Cell>();
    constructor(elements: HTMLCollection) {
        if (elements.length != 9) {
            console.log("CellIds array length must by 9.");
        }

        const l = elements.length;

        for (var i = 0; i < l; i++) {
            this.cells.push(new Cell(elements[i]))
        } 
    }

    getCells(): Array<Cell>
    {
        return this.cells;
    }
}
