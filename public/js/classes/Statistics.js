export var StatisticsStorage;
(function (StatisticsStorage) {
    StatisticsStorage["WIN"] = "tic-tac-toe-win";
    StatisticsStorage["DRAW"] = "tic-tac-toe-draw";
    StatisticsStorage["LOSE"] = "tic-tac-toe-lose";
})(StatisticsStorage || (StatisticsStorage = {}));
export class Statistics {
    constructor() { }
    static getInstance() {
        return this.instance || (this.instance = new this());
    }
    get(storage) {
        if (localStorage.hasOwnProperty(storage)) {
            let value = localStorage.getItem(storage);
            return value;
        }
        else {
            return "0";
        }
    }
    update(storage) {
        if (!localStorage.hasOwnProperty(storage)) {
            localStorage.setItem(storage, "1");
        }
        else {
            let value = localStorage.getItem(storage);
            if (value) {
                let count = +value + 1;
                localStorage.setItem(storage, count.toString());
            }
        }
    }
    clear(storage) {
        if (localStorage.hasOwnProperty(storage)) {
            localStorage.removeItem(storage);
        }
    }
}
