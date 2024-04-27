const cloneKey = Symbol('cloneKey');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define the cloneCar method using a symbol
    this[cloneKey] = function() {
      return new this.constructor(this._brand, this._motor, this._color);
    };
  }

  // Define the cloneCar method
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    if (Species) {
      return new Species(this._brand, this._motor, this._color);
    } else {
      return this[cloneKey]();
    }
  }
}

export default Car;
