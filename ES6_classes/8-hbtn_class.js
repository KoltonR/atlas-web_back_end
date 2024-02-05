/*
* Implement a class named HolbertonClass:
*
*    Constructor attributes:
*        @size (Number)
*        @location (String)
*    Each attribute must be stored in an “underscore” attribute version
*    (ex: name is stored in _name)
*    When the class is cast into a Number, it should return the size.
*    When the class is cast into a String, it should return the location.

*/

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  // getters and setters
  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  // class is cast into a Number, it should return the size.
  valueOf() {
    return this._size;
  }

  //  class is cast into a String, it should return the location.
  toString() {
    return this._location;
  }
} // End of HolbertonClass
