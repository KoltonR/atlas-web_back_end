/* Implement a class named HolbertonCourse:
* Constructor attributes:
* @name {String}
* @length {Number}
* @students {array of Strings}
* Make sure to verify the type of attributes during object creation
* Each attribute must be stored in an “underscore” attribute version
*  (ex: name is stored in _name)
* Implement a getter and setter for each attribute.
*/

export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the type of attributes during object creation
    if (typeof name !== 'string') {
      throw TypeError('Attribute: Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw TypeError('Attribute: Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw TypeError('Attribute: Students must be an array of strings');
    } else {
      this._students = students;
    }
  } // end of constructor

  // Implement a getter and setter for each attribute.
  // get and set name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError(' New Name must be a string');
    } else {
      this._name = newName;
    }
  }

  // get and set length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('New Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  // get and set students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('New Students must be an Array of strings');
    } else {
      this._students = newStudents;
    }
  }
} // end of class