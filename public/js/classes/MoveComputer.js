import { TicTacToeRules } from "./TicTacToeRules.js";
export class MoveComputer {
    constructor(cellStates) {
        this.cellStates = new Array();
        this.cellStates = cellStates;
        this.winLines = TicTacToeRules.getWinLines();
    }
    numberMove() {
        let numberTwo = this.cellStates.filter((element) => {
            return (element == 2);
        });
        return numberTwo.length;
    }
    isPossibleMove() {
        let ret = !this.cellStates.every((element) => {
            return (element > 0);
        });
        return ret;
    }
    moveFirst() {
        let ret = -1;
        if (this.cellStates[4] == 0) {
            ret = 4;
        }
        else {
            do {
                let possibleMove = [0, 2, 6, 8];
                let rand = possibleMove[Math.floor(Math.random() * possibleMove.length)];
                if (this.cellStates[rand] == 0) {
                    ret = rand;
                }
            } while (ret == -1);
        }
        return ret;
    }
    moveSecond() {
        let possibleSecondMove = [
            [0, 2],
            [0, 6],
            [2, 8],
            [6, 8]
        ];
        let ret = -1;
        possibleSecondMove.forEach((line) => {
            let check = 0;
            line.forEach((value) => {
                if (this.cellStates[value] == 2) {
                    line = line.filter((element) => {
                        return (element != value);
                    });
                    check += 1;
                }
            });
            if (check == 1) {
                if (this.cellStates[line[0]] == 0) {
                    ret = line[0];
                }
            }
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
            if (!this.isPossibleMove()) {
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
        if (ret == -1 && this.numberMove() == 0)
            ret = this.moveFirst();
        if (ret == -1)
            ret = this.checkWinLine(2);
        if (ret == -1 && this.numberMove() == 1)
            ret = this.moveSecond();
        if (ret == -1)
            ret = this.checkWinLine(1);
        if (ret == -1)
            ret = this.moveRandom();
        return ret;
    }
}
