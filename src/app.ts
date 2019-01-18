import { Board } from "./classes/board.js";

console.log("========== TYPESCRIPT-PLAYGROUND =================")

const cellElements: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');
const msgElement: HTMLElement|null = document.getElementById("msg");

let board = new Board();
board.addCells(cellElements);
board.setMsgElement(msgElement)