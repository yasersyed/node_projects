// class car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }

function car(make, model) {
  this.make = make;
  this.model = model;
}

car.prototype.start = function () {
  console.log(`${this.make} ${this.model} is starting...`);
};

function ElectricCar(make, model, batteryCapacity) {
  car.call(this, make, model);
  this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype = Object.create(car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function () {
    console.log(`${this.make} ${this.model} is charging. `)
}
let myCar = new ElectricCar("Toyota", "Prius", "100 Kwh");
myCar.start();
myCar.charge();
