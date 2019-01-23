import { Board } from "./classes/Board.js";
import { BoardMsg } from "./classes/BoardMsg.js";
console.log("========== TYPESCRIPT-PLAYGROUND =================");
const cellElements = document.getElementsByClassName('cell');
const msgElement = document.getElementById("msg");
if (msgElement) {
    let msg = new BoardMsg(msgElement);
    let board = new Board(msg);
    board.boardCells.addCells(cellElements);
}
