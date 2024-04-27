const cloneKey = Symbol('cloneKey');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define the cloneCar method using a symbol
    this[cloneKey] = function() {
      return new Car(this._brand, this._motor, this._color);
    };
  }

  // Define the cloneCar method
  cloneCar() {
    return this[cloneKey]();
  }
}

export default Car;
