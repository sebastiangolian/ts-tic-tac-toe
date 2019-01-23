import { TicTacToeRulse } from "./TicTacToeRules.js";

export class MoveComputer {
    private cellStates: number[] = new Array();
    private winLines: number[][];

    constructor(cellStates: number[]) 
    {
        this.cellStates = cellStates;
        this.winLines = TicTacToeRulse.getWinLines();
    }

    randomNumber(): number
    {
        return Math.floor(Math.random() * 8)
    }

    posibleMove(): boolean
    {
        let ret: boolean = 
        !this.cellStates.every((element) => 	
        {
            return (element > 0)
        });

        return ret;
    }

    moveRandom():number 
    {
        let ret:number = -1;
        let check:boolean = false; 
        do { 
            let randomNumber = this.randomNumber();
            
            if(this.cellStates[randomNumber] == 0){
                ret = randomNumber;
                check = false;
            } 
            else{
                check = true;
            }

            if(!this.posibleMove()){
                check = false;
            }
        } while(check);

        return ret;
    }

    moveWinLine(): number
    {
        return this.checkWinLine(2);
    }

    moveBlockLine(): number
    {
        return this.checkWinLine(1);
    }

    move(): number 
    {
        let ret:number = -1;
        if(ret == -1) ret = this.moveWinLine();
        if(ret == -1) ret = this.moveBlockLine();
        if(ret == -1) ret = this.moveRandom();
        return ret;
    }

    checkWinLine(player:number):number{
        let result: number = -1;
        this.winLines.forEach((line) => {
            let check = 0;
            line.forEach((value) => {
                if(this.cellStates[value] == player){
                    line = line.filter((element) => 	
                    {
                        return (element != value)
                    });
                    check += 1;
                }
            })

            if(check == 2) {
                if(this.cellStates[line[0]] == 0)
                {
                    result = line[0];
                }
            }
        })
        return result;
    }
}