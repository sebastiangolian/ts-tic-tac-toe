import { TicTacToeRulse } from "./TicTacToeRules.js";
export class MoveComputer {
    constructor(cellStates) {
        this.cellStates = new Array();
        this.cellStates = cellStates;
        this.winLines = TicTacToeRulse.getWinLines();
    }
    randomNumber() {
        return Math.floor(Math.random() * 8);
    }
    posibleMove() {
        let ret = !this.cellStates.every((element) => {
            return (element > 0);
        });
        return ret;
    }
    moveRandom() {
        let ret = -1;
        let check = false;
        do {
            let randomNumber = this.randomNumber();
            if (this.cellStates[randomNumber] == 0) {
                ret = randomNumber;
                check = false;
            }
            else {
                check = true;
            }
            if (!this.posibleMove()) {
                check = false;
            }
        } while (check);
        return ret;
    }
    moveWinLine() {
        return this.checkWinLine(2);
    }
    moveBlockLine() {
        return this.checkWinLine(1);
    }
    move() {
        let ret = -1;
        if (ret == -1)
            ret = this.moveWinLine();
        if (ret == -1)
            ret = this.moveBlockLine();
        if (ret == -1)
            ret = this.moveRandom();
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
}
