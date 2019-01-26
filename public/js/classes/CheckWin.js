import { TicTacToeRules } from "./TicTacToeRules.js";
export class CheckWin {
    constructor(statusCells) {
        this.statusCells = new Array();
        this.statusCells = statusCells;
        this.winLines = TicTacToeRules.getWinLines();
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
