/*
* Airport
*
* Implement a class named Airport:
*
* Constructor attributes:
* @name (String)
* @code (String)
* Each attribute must be stored in an “underscore” attribute version
* (ex: name is stored in _name)
* The default string description of the class should
* return the airport code
* (example Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]).
*
*/

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    } else {
      this._name = name;
    }

    if (typeof code !== 'string') {
      throw TypeError('code must be a string');
    } else {
      this._code = code;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
