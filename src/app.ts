import { Board } from "./classes/Board.js";
import { BoardMsg } from "./classes/BoardMsg.js";
import { BoardTryAgain } from "./classes/BoardTryAgain.js";
import { Statistics } from "./classes/Statistics.js";

const cellElements = document.getElementsByClassName('symbols') as HTMLCollectionOf<HTMLImageElement>;
const msgElement = document.getElementById("msg") as HTMLElement;
const tryAgainElement: HTMLElement|any = document.getElementById("try-again");
const winElement: HTMLElement|any = document.getElementById("win");
const drawElement: HTMLElement|any = document.getElementById("draw");
const loseElement: HTMLElement|any = document.getElementById("lose");

let board = new Board(new BoardMsg(msgElement));
let boardTryAgain = new BoardTryAgain(tryAgainElement,board);
board.boardCells.addCells(cellElements);

if(winElement && drawElement && loseElement) {
    let statistics = new Statistics(winElement,drawElement,loseElement);
    statistics.update();
}