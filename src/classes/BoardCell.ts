import { Board } from "./Board.js";

export class BoardCell {
   private status: number = 0;
   private board: Board;
   private element: HTMLImageElement;
   private nullSrc: string = "public/images/null.png";
   private xSrc: string = "public/images/x.png";
   private oSrc: string = "public/images/o.png";

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
         this.element.src = this.nullSrc;

      if (this.status == 1)
         this.element.src = this.xSrc;

      if (this.status == 2)
         this.element.src = this.oSrc;
   }

   reset(): void {
      this.setStatus(0);
      this.addClickEvent();
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
         this.element.src = this.nullSrc;
         this.setStatus(1);
         this.board.update();
      }
  }
}