import { Board } from "./Board.js";

export class BoardTryAgain {

   private board: Board;
   private element: Element;

   constructor(element: Element, board: Board) {
      this.element = element;
      this.board = board;
      this.addClickEvent();
   }

   addClickEvent(): void {
      this.element.addEventListener('click', this.eventClick);
   }

   //event method
   eventClick = () => {
      this.board.reset();
  }
}