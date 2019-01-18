import { Cell } from "./cell.js";

export class Board {
    msgElement:HTMLElement|null = null;
    cells: Array<Cell> = new Array<Cell>();
    
    constructor() {}

    addCells(elements: HTMLCollection)
    {
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

    getCells(): Array<Cell> {
        return this.cells;
    }

    setMsgElement(element:HTMLElement|null){
        this.msgElement = element;
    }

    update(): void {
        if(this.msgElement instanceof HTMLElement){
            
            if(this.checkWin())
            {
                this.msgElement.innerHTML = "Wygrałeś. Gratulacje.";
            }
            else
            {
                this.msgElement.innerHTML = "Zaznaczono element";
            }
        }
    }

    checkWin(): boolean
    {
        if(this.cells[0].getStatus() == 1 && this.cells[1].getStatus() == 1 && this.cells[2].getStatus() == 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
