class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for the amount attribute
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter and setter for the currency attribute
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Method to display the full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
