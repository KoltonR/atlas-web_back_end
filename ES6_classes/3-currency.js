/*
* Implement a class named Currency:
*
* Constructor attributes:
* @code (String)
* @name (String)
* Each attribute must be stored in an “underscore” attribute version
* (ex: name is stored in _name)
* Implement a getter and setter for each attribute.
* Implement a method named displayFullCurrency
* that will return the attributes in the following format name (code).
*/

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    } else {
      this._name = name;
    }
  } // end constructor

  // getters and setters for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('New code must be a string');
    } else {
      this._code = newCode;
    }
  }

  // getters and setters for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('New name must ba a string');
    } else {
      this._name = newName;
    }
  }

  // Method to display the attributes in a specified format name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
} // end class
