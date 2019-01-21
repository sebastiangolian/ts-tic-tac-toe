export class CheckWin {
    private cells: boolean[] = new Array(9)
    private posibleWin: boolean[][] = [
        [true, true, true, false, false, false, false, false, false],
        [false, false, false, true, true, true, false, false, false],
        [false, false, false, false, false, false, true, true, true],
        [true, false, false, true, false, false, true, false, false],
        [false, true, false, false, true, false, false, true, false],
        [false, false, true, false, false, true, false, false, true],
        [true, false, false, false, true, false, false, false, true],
        [false, false, true, false, true, false, true, false, false]
    ]
    constructor(cells: boolean[]) {
        this.cells = cells;
    }

    check() {
        let result: boolean = false;
        let cells = this.cells;
        this.posibleWin.forEach(function (row) {
            if (row.join("") == cells.join("")) {
                result = true;
            }
        });

        return result;
    }
}