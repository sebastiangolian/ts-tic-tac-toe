import { GameBoard } from "./classes/GameBoard.js";
import { Msg } from "./classes/Msg.js";
console.log("========== TYPESCRIPT-PLAYGROUND =================");
const cellElements = document.getElementsByClassName('cell');
const msgElement = document.getElementById("msg");
if (msgElement) {
    let msg = new Msg(msgElement);
    let board = new GameBoard(msg);
    board.addCells(cellElements);
}
