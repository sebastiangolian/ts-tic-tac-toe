export enum StatisticsStorage
{
    WIN = "tic-tac-toe-win",
    DRAW = "tic-tac-toe-draw",
    LOSE = "tic-tac-toe-lose"
}
export class Statistics 
{
    private static instance: Statistics;

    constructor() {}

    public static getInstance()
    {
        return this.instance || (this.instance = new this());
    }

    get(storage:StatisticsStorage):string
    {
        if(localStorage.hasOwnProperty(storage)) {
            let value = localStorage.getItem(storage) as string; 
            return value;
        }
        else {
            return "0";
        }
    }

    update(storage:StatisticsStorage):void {
        if(!localStorage.hasOwnProperty(storage)) {
            localStorage.setItem(storage,"1"); 
        }
        else {
            let value = localStorage.getItem(storage);
            if(value){
                let count:number = +value + 1;
                localStorage.setItem(storage,count.toString());
            }
        }
    }

    clear(storage:StatisticsStorage):void
    {
        if(localStorage.hasOwnProperty(storage)) {
            localStorage.removeItem(storage);
        }
    }
}