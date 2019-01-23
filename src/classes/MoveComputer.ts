export class MoveComputer {
    private cellStates: number[] = new Array();
    private opponentLines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    constructor(cellStates: number[]) 
    {
        this.cellStates = cellStates;
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

    moveBlockLine(): number
    {
        let result: number = -1;
        this.opponentLines.forEach((array) => {
            let check = 0;
            let line:number[] = array;
            
            array.forEach((value) => {
                if(this.cellStates[value] == 1){
                    check += 1;
                }
            })

            if(check == 2) {
                console.log('!!!!! linia');
            }
        })
        return result;
    }

    move(): number 
    {
        let ret:number = -1;

        this.moveBlockLine();
        ret = this.moveRandom();
        

        return ret;
    }
    
}