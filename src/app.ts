import { GameBoard } from "./classes/GameBoard.js";
import { Msg } from "./classes/Msg.js";
import { CheckWin } from "./classes/CheckWin.js";

console.log("========== TYPESCRIPT-PLAYGROUND =================")

const cellElements: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
const msgElement: HTMLElement|any = document.getElementById("msg");

if(msgElement){
    let msg = new Msg(msgElement) 
    let board = new GameBoard(msg);
    board.addCells(cellElements);
}