import { Board } from "./classes/board.js";
console.log("========== TYPESCRIPT-PLAYGROUND =================");
const cellElements = document.getElementsByClassName('cell');
const msgElement = document.getElementById("msg");
let board = new Board();
board.addCells(cellElements);
board.setMsgElement(msgElement);
