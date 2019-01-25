import { TicTacToeRulse } from "./TicTacToeRules.js";

export class MoveComputer {
    private cellStates: number[] = new Array();
    private winLines: number[][];

    constructor(cellStates: number[]) 
    {
        this.cellStates = cellStates;
        this.winLines = TicTacToeRulse.getWinLines();
    }

    numberMove(): number 
    {
        let numberTwo = this.cellStates.filter((element) => 	
        {
            return (element == 2)
        });
        return numberTwo.length;
    }

    isPosibleMove(): boolean
    {
        let ret: boolean = 
        !this.cellStates.every((element) => 	
        {
            return (element > 0)
        });

        return ret;
    }

    moveFirst():number 
    {
        let ret:number = -1;

        do { 
            let possibleMove:number[] = [0, 2, 6, 8]; 
            let rand = possibleMove[Math.floor(Math.random() * possibleMove.length)];
            if(this.cellStates[rand] == 0){
                ret = rand;
            }
        } while(ret == -1);
            
        return ret;
    }

    moveSecound():number 
    {
        let posibleSecoundMove: number[][] = [
            [0, 2],
            [0, 6],
            [2, 8],
            [6, 8]
        ];
        let ret:number = -1;
        posibleSecoundMove.forEach((line) => {
            let check = 0;
            line.forEach((value) => {
                if(this.cellStates[value] == 2){
                    line = line.filter((element) => 	
                    {
                        return (element != value)
                    });
                    check += 1;
                }
            })

            if(check == 1) {
                if(this.cellStates[line[0]] == 0)
                {
                    ret = line[0];
                }
            }
        })

        return ret;
    }

    moveRandom():number 
    {
        let ret:number = -1;
        let check:boolean = false; 
        do { 
            let randomNumber = Math.floor(Math.random() * 8);
            
            if(this.cellStates[randomNumber] == 0){
                ret = randomNumber;
                check = false;
            } 
            else{
                check = true;
            }

            if(!this.isPosibleMove()){
                check = false;
            }
        } while(check);

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

    move(): number 
    {
        let ret:number = -1;
        if(ret == -1 && this.numberMove() == 0) ret = this.moveFirst();
        if(ret == -1 && this.numberMove() == 1) ret = this.moveSecound()
        if(ret == -1) ret = this.checkWinLine(2);
        if(ret == -1) ret = this.checkWinLine(1);
        if(ret == -1) ret = this.moveRandom();
        return ret;
    }
}