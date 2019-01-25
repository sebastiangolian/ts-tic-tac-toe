import { TicTacToeRulse } from "./TicTacToeRules.js";
export class MoveComputer {
    constructor(cellStates) {
        this.cellStates = new Array();
        this.cellStates = cellStates;
        this.winLines = TicTacToeRulse.getWinLines();
    }
    isPosibleMove() {
        let ret = !this.cellStates.every((element) => {
            return (element > 0);
        });
        return ret;
    }
    moveRandom() {
        let ret = -1;
        let check = false;
        do {
            let randomNumber = Math.floor(Math.random() * 8);
            if (this.cellStates[randomNumber] == 0) {
                ret = randomNumber;
                check = false;
            }
            else {
                check = true;
            }
            if (!this.isPosibleMove()) {
                check = false;
            }
        } while (check);
        return ret;
    }
    checkWinLine(player) {
        let result = -1;
        this.winLines.forEach((line) => {
            let check = 0;
            line.forEach((value) => {
                if (this.cellStates[value] == player) {
                    line = line.filter((element) => {
                        return (element != value);
                    });
                    check += 1;
                }
            });
            if (check == 2) {
                if (this.cellStates[line[0]] == 0) {
                    result = line[0];
                }
            }
        });
        return result;
    }
    move() {
        let ret = -1;
        if (ret == -1)
            ret = this.checkWinLine(2);
        if (ret == -1)
            ret = this.checkWinLine(1);
        if (ret == -1)
            ret = this.moveRandom();
        return ret;
    }
}
