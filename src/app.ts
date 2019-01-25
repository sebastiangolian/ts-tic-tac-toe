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
    win.innerHTML = Statistics.getInstance().get(StatisticsStorage.WIN);
    draw.innerHTML = Statistics.getInstance().get(StatisticsStorage.DRAW);
    lose.innerHTML = Statistics.getInstance().get(StatisticsStorage.LOSE);
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