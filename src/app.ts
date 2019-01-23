import { Board } from "./classes/Board.js";
import { BoardMsg } from "./classes/BoardMsg.js";

//const cellElements: HTMLCollectionOf<HTMLImageElement> = document.getElementsByClassName('cell');
const cellElements = document.getElementsByClassName('symbols') as HTMLCollectionOf<HTMLImageElement>;
const msgElement: HTMLElement|any = document.getElementById("msg");

if(msgElement){
    let msg = new BoardMsg(msgElement) 
    let board = new Board(msg);
    board.boardCells.addCells(cellElements);
}