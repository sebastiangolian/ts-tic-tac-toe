import { Board } from "./Board.js";

export class BoardCell {
   private status: number = 0;
   private board: Board;
   private element: HTMLImageElement;

   constructor(element: HTMLImageElement, board: Board) {
      this.element = element;
      this.board = board;
      this.addClickEvent();
   }

   getStatus(): number {
      return this.status;
   }

   setStatus(status: number) {
      this.status = status;

      if (this.status == 0)
         this.element.src = "images/null.png";

      if (this.status == 1)
         this.element.src = "images/x.png";

      if (this.status == 2)
         this.element.src = "images/o.png";
   }

   addClickEvent(): void {
      this.element.addEventListener('click', this.eventClick);
   }

   removeClickEvent(): void {
      this.element.removeEventListener('click', this.eventClick);
   }

   //event method
   eventClick = () => {
      if (this.status == 0) {
         this.element.src = "images/x.png";
         this.status = 1;
         this.board.update();
      }
  }
}