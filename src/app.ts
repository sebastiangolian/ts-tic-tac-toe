import { Board } from "./classes/Board.js";
import { BoardMsg } from "./classes/BoardMsg.js";
import { BoardTryAgain } from "./classes/BoardTryAgain.js";
import { Statistics, StatisticsStorage } from "./classes/Statistics.js";

const body = document.getElementById("body") as HTMLElement;
const symbols = document.getElementsByClassName('symbols') as HTMLCollectionOf<HTMLImageElement>;
const msg = document.getElementById("msg") as HTMLElement;
const tryAgain = document.getElementById("try-again") as HTMLElement;
const resetStatistics = document.getElementById("reset-statistics") as HTMLElement;
const win = document.getElementById("win") as HTMLElement;
const draw = document.getElementById("draw") as HTMLElement;
const lose = document.getElementById("lose") as HTMLElement;

let board = new Board(new BoardMsg(msg));
board.boardCells.addCells(symbols);
let boardTryAgain = new BoardTryAgain(tryAgain, board);

var eventUpdateStatisticPanel = () => {
    let winNumber = parseInt(Statistics.getInstance().get(StatisticsStorage.WIN));
    let drawNumber = parseInt(Statistics.getInstance().get(StatisticsStorage.DRAW));
    let loseNumber = parseInt(Statistics.getInstance().get(StatisticsStorage.LOSE));
    let sumNumber = winNumber + drawNumber + loseNumber;
    let losePercent = ((loseNumber / sumNumber) * 100).toFixed();
    let drawPercent = ((drawNumber / sumNumber) * 100).toFixed();
    let winPercent = (100 - parseInt(losePercent) - parseInt(drawPercent)).toFixed();

    if(losePercent == 'NaN') losePercent = "0"
    if(drawPercent == 'NaN') drawPercent = "0"
    if(winPercent == 'NaN') winPercent = "0"
    
    win.innerHTML = winNumber.toString() + " (" + winPercent + "%)";
    draw.innerHTML = drawNumber.toString() + " (" + drawPercent + "%)";
    lose.innerHTML = loseNumber.toString() + " (" + losePercent + "%)";
}
var eventResetStatisticPanel = () => {
    Statistics.getInstance().clear(StatisticsStorage.WIN);
    Statistics.getInstance().clear(StatisticsStorage.DRAW);
    Statistics.getInstance().clear(StatisticsStorage.LOSE);
    eventUpdateStatisticPanel();
}

window.onload = eventUpdateStatisticPanel;
tryAgain.addEventListener("click",eventUpdateStatisticPanel);
resetStatistics.addEventListener("click",eventResetStatisticPanel);