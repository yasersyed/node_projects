var Car = require("./car");
class ElectricCar extends Car {
    constructor(make, model, batteryCapacity)
    {
        super(make,model);
        this.batteryCapacity = batteryCapacity;
    }

    charge()
    {
        console.log(`${this.make} ${this.model} is charging till ${this.batteryCapacity}`);
    }
}
module.exports = ElectricCar;
let electCar = new ElectricCar("Toyota", "Corolla hybrid", "100 kWh");
electCar.start();
electCar.charge();
