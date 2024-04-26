class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for the code attribute
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter and setter for the name attribute
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Method to display the full currency information
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
