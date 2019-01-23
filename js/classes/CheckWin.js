export class CheckWin {
    constructor(statusCells) {
        this.statusCells = new Array();
        this.winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.statusCells = statusCells;
    }
    check() {
        let result = false;
        this.winLines.forEach((array) => {
            let check = 0;
            array.forEach((value) => {
                if (this.statusCells[value] == true) {
                    check += 1;
                }
            });
            if (check == 3) {
                result = true;
            }
        });
        return result;
    }
}
