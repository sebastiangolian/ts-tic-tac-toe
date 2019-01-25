import { TicTacToeRulse } from "./TicTacToeRules.js";

export class CheckWin {
    private statusCells: boolean[] = new Array()
    private winLines: number[][];

    constructor(statusCells: boolean[]) {
        this.statusCells = statusCells;
        this.winLines = TicTacToeRulse.getWinLines();
    }

    check(): boolean {
        let result: boolean = false;
        this.winLines.forEach((array) => {
            let check = 0;
            
            array.forEach((value) => {
                if(this.statusCells[value] == true){
                    check += 1;
                }
            })

            if(check == 3) {
                result = true;
            }
        })

        return result;
    }
}