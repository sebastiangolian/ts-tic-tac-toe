export class CheckWin {
    constructor(cells) {
        this.cells = new Array(9);
        this.posibleWin = [
            [true, true, true, false, false, false, false, false, false],
            [false, false, false, true, true, true, false, false, false],
            [false, false, false, false, false, false, true, true, true],
            [true, false, false, true, false, false, true, false, false],
            [false, true, false, false, true, false, false, true, false],
            [false, false, true, false, false, true, false, false, true],
            [true, false, false, false, true, false, false, false, true],
            [false, false, true, false, true, false, true, false, false]
        ];
        this.cells = cells;
    }
    check() {
        let result = false;
        let cells = this.cells;
        this.posibleWin.forEach(function (row) {
            if (row.join("") == cells.join("")) {
                result = true;
            }
        });
        return result;
    }
}
