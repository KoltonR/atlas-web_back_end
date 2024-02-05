import Currency from './3-currency';

/*
* Implement a class named Pricing:
*
* Constructor attributes:
*   @amount (Number)
*   @currency (Currency)
* Each attribute must be stored in an “underscore” attribute version
*    (ex: name is stored in _name)
* Implement a getter and setter for each attribute.
* Implement a method named displayFullPrice that returns
*  the attributes in the following format amount currency_name (currency_code).
* Implement a static method named convertPrice.
*    It should accept two arguments:
* amount (Number), conversionRate (Number).
* The function should return the amount multiplied by the conversion rate
*/

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be an Object of Currency class');
    } else {
      this._currency = currency;
    }
  }

  // Getters and setters for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('New amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  // Getters and Setters for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('New currency must be an Object of Currency class');
    } else {
      this._currency = newCurrency;
    }
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static Method to convert Price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw TypeError('Conversion rate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
} // End of Pricing class
