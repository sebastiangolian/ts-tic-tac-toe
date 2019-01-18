export class Cell {
   element: Element;

   constructor(element: Element) {
      this.element = element;
      this.addClickEvent();
   }

   addClickEvent(): void {
      this.element.addEventListener('click',() => {
         this.eventClick()
      });
   }

   eventClick(): void {
      console.log("Name is  :   " + this.element.id)
   }
}
