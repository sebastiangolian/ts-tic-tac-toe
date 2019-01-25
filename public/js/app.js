import { Board } from "./classes/Board.js";
import { BoardMsg } from "./classes/BoardMsg.js";
import { BoardTryAgain } from "./classes/BoardTryAgain.js";
import { Statistics, StatisticsStorage } from "./classes/Statistics.js";
const body = document.getElementById("body");
const symbols = document.getElementsByClassName('symbols');
const msg = document.getElementById("msg");
const tryAgain = document.getElementById("try-again");
const resetStatistics = document.getElementById("reset-statistics");
const win = document.getElementById("win");
const draw = document.getElementById("draw");
const lose = document.getElementById("lose");
let board = new Board(new BoardMsg(msg));
board.boardCells.addCells(symbols);
let boardTryAgain = new BoardTryAgain(tryAgain, board);
var eventUpdateStatisticPanel = () => {
    win.innerHTML = Statistics.getInstance().get(StatisticsStorage.WIN);
    draw.innerHTML = Statistics.getInstance().get(StatisticsStorage.DRAW);
    lose.innerHTML = Statistics.getInstance().get(StatisticsStorage.LOSE);
};
var eventResetStatisticPanel = () => {
    Statistics.getInstance().clear(StatisticsStorage.WIN);
    Statistics.getInstance().clear(StatisticsStorage.DRAW);
    Statistics.getInstance().clear(StatisticsStorage.LOSE);
    eventUpdateStatisticPanel();
};
window.onload = eventUpdateStatisticPanel;
tryAgain.addEventListener("click", eventUpdateStatisticPanel);
resetStatistics.addEventListener("click", eventResetStatisticPanel);
