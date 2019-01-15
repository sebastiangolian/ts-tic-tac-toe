import { Device } from "./device";

export class Computer extends Device {
   private memory:number;

   constructor(memory:number)
   {
      super("Computer",2000);
      this.memory = memory;
   }

   disp(): void {
      super.disp();
      console.log("Memory is  :   " + this.memory)
   }
}