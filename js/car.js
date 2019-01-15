"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(name, engine, vmax) {
        this.name = name;
        this.engine = engine;
        this.vmax = vmax;
    }
    Car.prototype.disp = function () {
        console.log("Name is  :   " + this.name);
        console.log("Engine is  :   " + this.engine);
        console.log("Vmax is  :   " + this.vmax);
    };
    return Car;
}());
exports.Car = Car;
