export class Device {
   name:string;
   price:number;

   constructor(name:string, price: number) {
      this.name = name
      this.price = price
   }

   disp(): void {
      console.log("Name is  :   " + this.name)
      console.log("Price is  :   " + this.price)
   }
}