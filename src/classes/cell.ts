import { Board } from "./Board.js";

export class Cell {
   private status: number = 0;
   private board: Board;
   private element: Element;

   constructor(element: Element, board: Board) {
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
         this.element.innerHTML = "[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]";

      if (this.status == 1)
         this.element.innerHTML = "[&nbsp;&nbsp;X&nbsp;&nbsp;]";

      if (this.status == 2)
         this.element.innerHTML = "[&nbsp;&nbsp;O&nbsp;&nbsp;]";
   }

   addClickEvent(): void {
      this.element.addEventListener('click', () => {
         this.eventClick()
      });
   }

   removeClickEvent(): void {
      let cloneNode = this.element.cloneNode(true);
      if(this.element.parentNode)
         this.element.parentNode.replaceChild(cloneNode, this.element);
   }

   eventClick(): void {
      if (this.status == 0) {
         this.element.innerHTML = "[&nbsp;&nbsp;X&nbsp;&nbsp;]"
         this.status = 1;
         this.board.update();
      }
   }
}