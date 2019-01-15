export class Car {
   name:string;
   engine: string;
   vmax:number;

   constructor(name:string, engine: string, vmax: number) {
      this.name = name
      this.engine = engine
      this.vmax = vmax
   }

   disp(): void {
      console.log("Name is  :   " + this.name)
      console.log("Engine is  :   " + this.engine)
      console.log("Vmax is  :   " + this.vmax)
   }
}