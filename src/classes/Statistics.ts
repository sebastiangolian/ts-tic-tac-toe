export class Statistics 
{
    private winElement:HTMLElement;
    private drawElement:HTMLElement;
    private loseElement:HTMLElement;

    static readonly STORAGE_NAME_WIN = "tic-tac-toe-win";
    static readonly STORAGE_NAME_DRAW = "tic-tac-toe-draw";
    static readonly STORAGE_NAME_LOSE = "tic-tac-toe-lose";

    constructor(winElement:HTMLElement, drawElement:HTMLElement, loseElement:HTMLElement)
    {
        this.winElement = winElement;
        this.drawElement = drawElement;
        this.loseElement = loseElement;
    }

    update(): void {
        this.winElement.innerHTML = this.getWin();
        this.drawElement.innerHTML = this.getDraw();
        this.loseElement.innerHTML = this.getLose();
    }

    getWin():string {
        return this._get(Statistics.STORAGE_NAME_WIN);
    }

    getDraw():string {
        return this._get(Statistics.STORAGE_NAME_DRAW);
    }

    getLose():string {
        return this._get(Statistics.STORAGE_NAME_LOSE);
    }

    updateWin():void {
        this._update(Statistics.STORAGE_NAME_WIN);
    }

    updateDraw():void {
        this._update(Statistics.STORAGE_NAME_DRAW);
    }

    updateLose():void {
        this._update(Statistics.STORAGE_NAME_LOSE);
    }

    _get(storageName:string):string {
        if(localStorage.hasOwnProperty(storageName)) {
            let value = localStorage.getItem(storageName) as string; 
            return value;
        }
        else {
            return "0";
        }
    }

    _update(storageName:string):void {
        if(!localStorage.hasOwnProperty(storageName)) {
            localStorage.setItem(storageName,"1"); 
        }
        else {
            let value = localStorage.getItem(storageName);
            if(value){
                let count:number = +value + 1;
                localStorage.setItem(storageName,count.toString());
            }
        }
    }
}