import { Board } from "./classes/board.js";
console.log("========== TYPESCRIPT-PLAYGROUND =================");
const cellElements = document.getElementsByClassName('cell');
let board = new Board(cellElements);
console.log(board.getCells());
