import { Board } from "./classes/Board.js";
import { Msg } from "./classes/Msg.js";
console.log("========== TYPESCRIPT-PLAYGROUND =================");
const cellElements = document.getElementsByClassName('cell');
const msgElement = document.getElementById("msg");
if (msgElement) {
    let msg = new Msg(msgElement);
    let board = new Board(msg);
    board.addCells(cellElements);
}
