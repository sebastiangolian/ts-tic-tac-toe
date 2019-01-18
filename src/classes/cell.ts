import { Board } from "./board.js";

export class Cell {
   private status:number = 0;
   private board:Board = new Board();
   private element: Element;

   constructor(element: Element) {
      this.element = element;
      this.addClickEvent();
   }

   setBoard(board:Board)
   {
      this.board = board;
   }

   getStatus(): number {
      return this.status;
   }

   addClickEvent(): void {
      this.element.addEventListener('click',() => {
         this.eventClick()
      });
   }

   eventClick(): void {
      if(this.status == 0){
         this.element.innerHTML = "[&nbsp;&nbsp;X&nbsp;&nbsp;]"
         this.status = 1;
         this.board.update();
      }
   }
}
