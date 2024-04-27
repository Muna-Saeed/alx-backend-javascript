const CLONE_CAR = Symbol("cloneCar");

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [CLONE_CAR]() {
    const { constructor, ...properties } = Object.getOwnPropertyDescriptors(this);
    const clonedCar = Object.create(Object.getPrototypeOf(this), properties);
    clonedCar.constructor = constructor;
    return clonedCar;
  }

  cloneCar() {
    return this[CLONE_CAR]();
  }
}

export default Car;
