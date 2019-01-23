import { Board } from "./classes/Board.js";
import { BoardMsg } from "./classes/BoardMsg.js";
import { CheckWin } from "./classes/CheckWin.js";

console.log("========== TYPESCRIPT-PLAYGROUND =================")

const cellElements: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
const msgElement: HTMLElement|any = document.getElementById("msg");

if(msgElement){
    let msg = new BoardMsg(msgElement) 
    let board = new Board(msg);
    board.addCells(cellElements);
}